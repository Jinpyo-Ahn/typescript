class Chatgpt {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sum(a: number, b: number) {
    return a + b;
  }
}

const gpt = new Chatgpt('대화형 AI');

