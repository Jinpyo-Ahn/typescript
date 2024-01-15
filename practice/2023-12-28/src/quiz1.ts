/**
 * 1. 한밭대학교는 교수, 직원,  학생으로 구성되어 있다.
 * 2. 교수는 교수번호, 이름, 전화번호, 이메일, 연구실을 가지고 있다.
 * 3. 직원은 직원번호, 이름, 전화번호, 이메일, 사무실을 가지고 있다.
 * 4. 학생은 학번, 이름, 전화번호, 이메일, 학적을 가지고 있다.
 *    학생은 학부생과 대학원생이 있다.
 * 5. 위 요구사항을 클래스로 만들고 정보를 출력한다.
 */
const log = console.log;

interface PersonObj<T> {
  id: T,
  name: string,
  tel: string,
  email: string
}

type ProfessorId = string;
type Locate = string;

class Person<T> {
  protected id: T;
  protected name: string
  protected tel: string;
  protected email: string;

  constructor(id: T, name: string, tel: string, email: string) {
    this.id = id;
    this.name = name;
    this.tel = tel;
    this.email = email;
  }

  protected info(): PersonObj<T> {
    return {
      id: this.id,
      name: this.name,
      tel: this.tel,
      email: this.email,
    }
  }
}

class Professor extends Person<ProfessorId> {
  readonly #lab: Locate;

  constructor(id: ProfessorId, name: string, tel: string, email: string, lab: Locate) {
    super(id, name, tel, email);
    this.#lab = lab;
  }

  public info(): PersonObj<ProfessorId> & { lab: Locate } {
    return {
      ...super.info(),
      lab: this.#lab,
    };
  }
}

const professor = new Professor('20211234', '교수님', '010-1234-1234', 'qwerqwer1234@', 'WiSoft');
log(professor.info());
