/**
 * 1. 한밭대학교는 교수, 직원,  학생으로 구성되어 있다.
 * 2. 교수는 교수번호, 이름, 전화번호, 이메일, 연구실을 가지고 있다.
 * 3. 직원은 직원번호, 이름, 전화번호, 이메일, 사무실을 가지고 있다.
 * 4. 학생은 학번, 이름, 전화번호, 이메일, 학적을 가지고 있다.
 *    학생은 학부생과 대학원생이 있다.
 * 5. 위 요구사항을 클래스로 만들고 정보를 출력한다.
 */

/**
 * 요구 사항 분석
 * 1. 모든 개체의 공통 속성은 이름, 전화번호, 이메일 -> 사람
 * 2. 직원 개체는 사람이면서 고유한 속성인 직원번호, 사무실을 가지고 있다.
 * 3. 교수 개체는 사람이면서 고유한 속성인 교수번호, 연구실을 가지고 있다.
 * 4. 학생 개체는 사람이면서 고유한 속성인 학번, 학적을 가지고 있다.
 * 5. 학생 개체는 학부생과 대학원생이 있다.
 */

type location = string;
type ProfessorId = string;
type EmployeeId = string;

class Person {
  #id: string;
  #name: string;
  #tel: string;
  #email: string;

  public get id(): string {
    return this.#id;
  }

  public get name(): string {
    return this.#name;
  }

  public get tel(): string {
    return this.#tel;
  }

  public get email(): string {
    return this.#email;
  }

  constructor(id: string, name: string, tel: string, email: string) {
    this.#id = id;
    this.#name = name;
    this.#tel = tel;
    this.#email = email;
  }

  protected info(): { id: string, name: string, tel: string, email: string } {
    return {id: this.#id, name: this.#name, tel: this.#tel, email: this.#email};
  }
}

class Professor extends Person {
  #lab: location;

  get lab(): string {
    return this.#lab;
  }

  constructor(id: ProfessorId, name: string, tel: string, email: string, lab: location) {
    super(id, name, tel, email);
    this.#lab = lab;
  }

  public info(): { id: ProfessorId, lab: location, name: string, tel: string, email: string } {
    const professor = {
      lab: this.#lab,
    }
    return {...super.info(), ...professor};
  }
}

class Employee extends Person {
  #office: location;

  get office(): string {
    return this.#office;
  }

  constructor(id: EmployeeId, name: string, tel: string, email: string, office: location) {
    super(id, name, tel, email);
    this.#office = office;
  }

  public info(): { id: EmployeeId, name: string, tel: string, email: string, office: location } {
    const employee = {
      office: this.#office,
    }
    return {...super.info(), ...employee};
  }
}

const professor = new Professor('1', '교수님', '010-4891-400', 'wlsvy@name', 'WiSoft');
const employee = new Employee('2', '조교님', '010-1234-1234', 'rytnsla@nam', 'N5-404');

console.log(professor.info());
console.log(employee.info());

// 출력 형식 맞추기
// type Generic = Person & (Professor | Employee);
//
// function printInfo<T extends Generic>(person: T): void {
//   console.log(
//     `ID: ${person.id} Name: ${person.name} Tel: ${person.tel} Email: ${person.email}`,
//     (person instanceof Professor) ? `Lab: ${person.lab}`
//       : (person instanceof Employee) ? `Office: ${person.office}`
//         : '에러',
//   )
// }
//
// printInfo(professor);
// printInfo(employee);

