import {menu} from "@/Menu";
import {log} from "@/app";

// 메뉴 출력 함수 정의
export function printMenu(): void {
  log("=== 분식집 메뉴 ===");
  for (const category in menu) {
    log(`- ${category}`);
    menu[category].forEach(item => {
      log(`    ${item.name} - ${item.price}원 - ${item.composition}`);
    });
  }
  log("=================");
}