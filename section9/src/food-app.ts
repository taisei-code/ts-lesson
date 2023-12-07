class Score { }

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener()
  }
}

// 食べ物の一覧を取得
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food')

  constructor() {
    this.elements.forEach(element => {
      // Foodにelementを渡す（特定の処理をFoodで行うため）
      new Food(element);
    })
  }

  const foods = new Foods();
}