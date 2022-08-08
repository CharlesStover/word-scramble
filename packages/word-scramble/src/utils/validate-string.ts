export default function validateString(value: unknown): string {
  if (typeof value !== 'string') {
    throw new Error(`Expected a string, but received: ${typeof value}`);
  }
  return value;
}
