type FoodName = string;
type Money = number;

// 메뉴 아이템 타입 정의
export interface MenuItem {
  name: FoodName;
  price: Money;
  composition: string;
}

// 메뉴 항목 및 가격, 구성 요소 정보 정의
export const menu: { [menuCategory: string]: MenuItem[] } = {
  "김밥": [
    { name: "1.기본 김밥", price: 1500, composition: "김, 밥, 단무지, 시금치, 햄" },
    { name: "2.참치 김밥", price: 2000 , composition: "김, 밥, 단무지, 시금치, 참치"},
    { name: "3.소고기 김밥", price: 2500 , composition: "김, 밥, 단무지, 시금치, 소고기"}
  ],
  "떡볶이": [
    { name: "1.기본 떡볶이", price: 3000, composition: "떡, 소스, 어묵"},
    { name: "2.치즈 떡볶이", price: 3500, composition: "떡, 소스, 어묵, 치즈" },
    { name: "3.라볶이", price: 3500, composition: "떡, 소스, 어묵, 사리" }
  ],
  "라면": [
    { name: "1.기본 라면", price: 2000, composition: "사리, 스프" },
    { name: "2.치즈 라면", price: 2500, composition: "사리, 스프, 치즈" },
    { name: "3.떡라면", price: 2500, composition: "사리, 스프, 떡" }
  ]
};

