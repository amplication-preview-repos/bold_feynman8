import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "title";

export const PropertyTitle = (record: TProperty): string => {
  return record.title?.toString() || String(record.id);
};
