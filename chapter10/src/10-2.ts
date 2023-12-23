function getText<T>(text: T): T {
  return text;
}

getText<string>('hi');

// getText<string>(1000);