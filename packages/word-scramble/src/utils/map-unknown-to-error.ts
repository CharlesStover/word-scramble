export default function mapUnknownToError(value: unknown): Error {
  if (value instanceof Error) {
    return value;
  }

  if (typeof value === 'number' || typeof value === 'string') {
    return new Error(value.toString());
  }

  if (typeof value === 'object') {
    return new Error(JSON.stringify(value));
  }

  return new Error('Unknown error');
}
