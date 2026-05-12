/**
 * Extracts a localised display string from a value that may be a plain
 * string, a localisation object ({ en, bn, … }), or any other type.
 */
export const getLocalizedString = (val: unknown): string => {
  if (!val) return "";
  if (typeof val === "string") return val;
  if (typeof val === "object") {
    const obj = val as Record<string, unknown>;
    const extracted = obj["en"] || obj["bn"] || Object.values(obj)[0] || "";
    return typeof extracted === "object"
      ? JSON.stringify(extracted)
      : String(extracted);
  }
  return String(val);
};

/**
 * Normalises a sizes value into a clean string array.
 * Handles arrays of strings/objects and comma-separated strings.
 */
export const getSizesArray = (sizes: unknown): string[] => {
  if (!sizes) return [];

  if (Array.isArray(sizes)) {
    return sizes
      .map((s: unknown) => {
        if (typeof s === "string") return s;
        if (s && typeof s === "object") {
          const obj = s as Record<string, unknown>;
          const raw = obj["name"] || obj["label"] || obj["value"] || String(obj["id"] || s);
          return String(raw);
        }
        return String(s ?? "");
      })
      .map((s) => s.trim())
      .filter(Boolean);
  }

  if (typeof sizes === "string") {
    return sizes.split(",").map((s) => s.trim()).filter(Boolean);
  }

  return [];
};

/**
 * Returns a { label, value } pair that best represents a variant for
 * display purposes, skipping internal/quantity-like fields.
 */
export const getVariantDisplayValues = (
  variant: unknown
): { label: string; value: string } => {
  if (!variant || typeof variant !== "object") return { label: "", value: "" };
  const v = variant as Record<string, unknown>;

  const isQuantityLike = (label: string): boolean => {
    const n = String(label ?? "").toLowerCase().trim();
    return n.includes("quantity") || n === "qty" || n.includes("unit qty");
  };

  if (v["attribute_name"] && v["attribute_value"]) {
    const attrLabel = getLocalizedString(v["attribute_name"]);
    return {
      label: isQuantityLike(attrLabel) ? "" : attrLabel,
      value: getLocalizedString(v["attribute_value"]),
    };
  }

  if (v["variant_name"] && v["variant_value"]) {
    const varLabel = getLocalizedString(v["variant_name"]);
    return {
      label: isQuantityLike(varLabel) ? "" : varLabel,
      value: getLocalizedString(v["variant_value"]),
    };
  }

  const ignoredKeys = new Set([
    "id", "price", "product_id", "created_at", "updated_at", "deleted_at",
    "image", "thumbnail", "thumbnail_url", "sku", "stock",
    "quantity", "qty", "unit_quantity", "unit_qty", "stock_quantity", "available_quantity",
    "sizes", "name", "title", "description",
    "current_pricing", "attributes", "variants", "status", "is_active", "type",
  ]);

  for (const key of Object.keys(v)) {
    const val = v[key];
    if (
      !ignoredKeys.has(key) &&
      val !== null &&
      val !== undefined &&
      typeof val !== "object" &&
      val !== ""
    ) {
      const displayLabel =
        key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ");
      if (isQuantityLike(displayLabel)) continue;
      return { label: displayLabel, value: String(val) };
    }
  }

  const fallback = v["name"] || v["title"] || v["sku"] || "";
  const extracted =
    fallback && typeof fallback === "object"
      ? (fallback as Record<string, unknown>)["name"] ||
        (fallback as Record<string, unknown>)["value"] ||
        (fallback as Record<string, unknown>)["title"] ||
        fallback
      : fallback;

  return { label: "", value: getLocalizedString(extracted) };
};

/**
 * Resolves the human-readable label for a product's size/colour axis
 * (e.g. "Size", "Color", "সাইজ") from variant or product metadata.
 */
export const getDynamicSizeLabel = (
  variant: unknown,
  productData: unknown
): string => {
  const v = variant && typeof variant === "object"
    ? (variant as Record<string, unknown>)
    : null;
  const p = productData && typeof productData === "object"
    ? (productData as Record<string, unknown>)
    : null;

  if (v?.["size_attribute_name"]) return getLocalizedString(v["size_attribute_name"]);
  if (v?.["sizes_name"]) return getLocalizedString(v["sizes_name"]);
  if (v?.["options_title"]) return getLocalizedString(v["options_title"]);
  if (v?.["size_label"]) return getLocalizedString(v["size_label"]);

  if (p?.["size_attribute_name"]) return getLocalizedString(p["size_attribute_name"]);
  if (p?.["sizes_name"]) return getLocalizedString(p["sizes_name"]);
  if (p?.["options_title"]) return getLocalizedString(p["options_title"]);
  if (p?.["size_label"]) return getLocalizedString(p["size_label"]);

  if (p?.["attribute_name"] && (!v || !v["attribute_name"])) {
    return getLocalizedString(p["attribute_name"]);
  }
  if (p?.["variant_name"] && (!v || !v["variant_name"])) {
    return getLocalizedString(p["variant_name"]);
  }

  const colorNames = new Set([
    "red", "blue", "green", "yellow", "black", "white", "pink",
    "purple", "orange", "grey", "gray", "brown", "navy", "maroon",
  ]);
  const sizes = getSizesArray(v?.["sizes"] || p?.["sizes"]);
  if (sizes.length > 0) {
    const isColors = sizes.every(
      (s) => s.startsWith("#") || colorNames.has(s.toLowerCase())
    );
    if (isColors) return "Color";
  }

  return "Size";
};
