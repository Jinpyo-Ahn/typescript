import {Order, OrderedItem} from "@/Order";
import {menu} from "@/Menu";
import * as readline from "readline";
import {log} from "@/app";
import {printMenu} from "@/print-menu";

// 콘솔 입력을 처리하는 readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function orderMenu(): void {
  const order = new Order();

  rl.question("주문하실 메뉴를 선택하세요: ", (selectedMenu) => {
    const category = selectedMenu.trim();

    if (menu[category]) {
      printMenu();
      rl.question("선택하신 메뉴의 번호와 수량을 입력하세요 (예: 1 2): ", (input) => {
        const [itemIndex, quantity] = input.trim().split(" ").map(Number);
        const menuItem = menu[category][itemIndex - 1];
        if (menuItem && quantity > 0) {
          const orderedItem: OrderedItem = {
            menuItem,
            quantity
          };
          order.addOrderedItem(orderedItem);
          const totalPrice = order.calculateTotal();
          log(`${menuItem.name} ${quantity}개가 주문되었습니다.`);
          log(`주문 금액: ${totalPrice}원`);
        } else {
          log("잘못된 입력입니다. 다시 시도해주세요.");
        }
        rl.close();
      });
    } else {
      log("잘못된 메뉴 선택입니다. 다시 선택해주세요.");
      rl.close();
    }
  });
}