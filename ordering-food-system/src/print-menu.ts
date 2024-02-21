import {menu} from "./menu";
import {log} from "./app";

// 메뉴 출력 함수
export function printMenu(): void {
  log("=== 분식집 메뉴 ===");
  for (const menuCategory in menu) {
    log(`- ${menuCategory}`);
    menu[menuCategory].forEach(item => {
      log(`    ${item.name} - ${item.price}원 - ${item.composition}`);
    });
  }
  log("=================");
}