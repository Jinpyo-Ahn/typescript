/**
 * 1. 한밭대학교는 교수, 직원,  학생으로 구성되어 있다.
 * 2. 교수는 교수번호, 이름, 전화번호, 이메일, 연구실을 가지고 있다.
 * 3. 직원은 직원번호, 이름, 전화번호, 이메일, 사무실을 가지고 있다.
 * 4. 학생은 학번, 이름, 전화번호, 이메일, 학적을 가지고 있다.
 *    학생은 학부생과 대학원 생으로 구성되어 있다.
 * 5. 위 요구사항을 클래스로 만들고 출력을 한다.
 *     1. 학생은 학부생과 대학원생
 */

class HanBat {
  protected name: string;
  protected tell: string;
  protected email: string;

  constructor(name: string, tell: string, email: string) {
    this.name = name;
    this.tell = tell;
    this.email = email;
  }

  protected inform(): void {
    console.log(`이름: ${this.name} 전화번호: ${this.tell} 이메일: ${this.email} `);
  }
}

class Student extends HanBat {
  #studentId: string;
  #academic: string;

  constructor(studentId: string, name: string, tell: string, email: string, academic:string) {
    super(name, tell, email);
    this.#studentId = studentId;
    this.#academic = academic;
  }

  public studentInform(): void {
    console.log(`학번: ${this.#studentId} ${this.inform()} 학적사항: ${this.#academic}`);
  }
}

class Professor extends HanBat {
  #professorId: string;
  #lab: string;

  constructor(professorId: string, name: string, tell: string, email: string, lab:string) {
    super(name,tell,email);
    this.#professorId = professorId
    this.#lab = lab;
  }

  public professorInform(): void {
    console.log(`교수번호: ${this.#professorId} ${this.inform()} 학적사항: ${this.#lab}`);
  }

}

class Employee extends HanBat {

}