var texts = ["天氣晴", "氣溫33度", "降雨機率50%"];    // 打字 - 陣列
var speed = 300;                                    // 打字速度 - 毫秒
var index = 0;                                      // 索引值 - 從 0 開始
var classname = ".type";                            // 類別名稱 
var count = 0;                                      // 文字數量
var wait = 6;                                       // 等待


function type() {
    // var text = document.querySelector(classname);   // "搜尋"元素

    // var letter = texts[index].slice(0, count++);    // 切割文字(開始位置，切割數量)

    // text.innerHTML = letter;                        // 插入 HTML = 文字

    document.querySelector(classname).innerHTML = texts[index].slice(0, count++);

    if (count == texts[index].length + wait) {      // 文字數量 等於 當前文字長度+等待
        index++;                                    // 索引值 +1
        count = 0;                                  // 文字數量 歸零
    }

    if (index == texts[index].length) {             // 如果 索引值 等於 長度
        index = 0;                                  // 索引值 歸零
    }

    setTimeout(type, speed);                        // 重複執行方法指定間隔時間
}

document.addEventListener("DOMContentLoded", type());   // DOMContentLoded 網頁載入完成後執行