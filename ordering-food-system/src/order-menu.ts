import {Order, OrderedItem} from "./order";
import {menu, MenuItem} from "./menu";
import * as readline from "readline"; // readline 모듈 가져오기
import {log} from "./app";
import type {TotalPrice} from "./order";

// 콘솔에 입출력 값을 처리하는 readline 모듈의 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function orderMenu(): void {
  const order = new Order();
  function menuSelection() {
    rl.question("주문하실 메뉴를 선택하세요: ", (selectedMenu) => {
      const category = selectedMenu.trim();

      if (menu[category]) {
        rl.question("선택하신 메뉴의 번호와 수량을 입력하세요 (예: 1 2): ", (input) => {
          const [menuNumber, quantity] = input.trim().split(" ").map(Number);
          const menuItem: MenuItem = menu[category][menuNumber - 1];

          if (menuItem && quantity > 0) {
            const orderedItem: OrderedItem = {
              menuItem,
              quantity
            };
            order.addOrderedItem(orderedItem);
            const totalPrice: TotalPrice = order.calculateTotal();
            log(`${menuItem.name.replace(/[0-9.]/g, '')} ${quantity}개가 주문되었습니다.`);
            log(`주문 금액: ${totalPrice}원`);
            rl.close();
          } else {
            log("잘못된 입력입니다. 다시 시도해주세요.");
            rl.close();
          }
        });
      } else {
        log("잘못된 메뉴 선택입니다. 다시 선택해주세요.");
        menuSelection();
      }
    });
  }

  // 주문 메뉴 선택 프로세스 시작
  menuSelection();
}
