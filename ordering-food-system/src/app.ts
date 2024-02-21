import {printMenu} from "./print-menu";
import {orderMenu} from "./order-menu";

export const log = console.log;

// 주문 시작
log("분식집 주문을 시작합니다.");
printMenu();
orderMenu()
