import {MenuItem} from "./Menu";

// 주문 아이템 타입 정의
export interface OrderedItem {
  menuItem: MenuItem;
  quantity: number;
}

// 주문 정보 관리 클래스
export class Order {
  items: OrderedItem[] = [];

  // 주문 추가 메소드
  addOrderedItem(item: OrderedItem): void {
    this.items.push(item);
  }

  // 총 주문 가격 계산 메소드
  calculateTotal(): number {
    let total: number = 0;
    for (const item of this.items) {
      total += item.menuItem.price * item.quantity;
    }
    return total;
  }
}


