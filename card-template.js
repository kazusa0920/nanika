const Snippets = [
    {
        id: 1,
        title: "Flexboxで完全中央揃え",
        language: "CSS",
        code: ".container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}",
        date: "2025-01-15"
    },
    {
        id: 2,
        title: "配列の重複要素を削除する",
        language: "JavaScript",
        code: "const uniqueArray = [...new Set(array)];",
        date: "2025-01-20"
    },
    {
        id: 3,
        title: "レスポンシブな画像表示",
        language: "HTML",
        code: "<img src=\"small.jpg\" srcset=\"large.jpg 1024w, medium.jpg 640w\" alt=\"画像\">",
        date: "2025-02-01"
    },
    {
        id: 4,
        title: "Gridレイアウトの基本",
        language: "CSS",
        code: ".grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 16px;\n}",
        date: "2025-02-10"
    },
    {
        id: 5,
        title: "非同期処理（Fetch API）",
        language: "JavaScript",
        code: "async function fetchData(url) {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n}",
        date: "2025-03-05"
    },
    {
        id: 6,
        title: "文字の省略（三点リーダー）",
        language: "CSS",
        code: ".ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}",
        date: "2025-03-12"
    },
    {
        id: 7,
        title: "ダークモードのメディアクエリ",
        language: "CSS",
        code: "@media (prefers-color-scheme: dark) {\n    body {\n        background-color: #333;\n        color: #fff;\n    \n}",
        date: "2025-04-01"
    },
    {
        id: 8,
        title: "DOM要素のスムーススクロール",
        language: "JavaScript",
        code: "element.scrollIntoView({ behavior: 'smooth' });",
        date: "2025-04-18"
    },
    {
        id: 9,
        title: "プレースホルダーのCSS指定",
        language: "CSS",
        code: "input::placeholder {\n    color: #999;\n    font-style: italic;\n}",
        date: "2025-05-02"
    },
    {
        id: 10,
        title: "現在の日付をYYYY-MM-DDで取得",
        language: "JavaScript",
        code: "const today = new Date().toISOString().split('T')[0];",
        date: "2025-05-20"
    },
    {
        id: 11,
        title: "スクロールバーを非表示にする",
        language: "CSS",
        code: ".no-scrollbar {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n.no-scrollbar::-webkit-scrollbar {\n    display: none;\n}",
        date: "2025-06-01"
    },
    {
        id: 12,
        title: "セマンティックな進捗バー",
        language: "HTML",
        code: "<progress value=\"70\" max=\"100\">70%</progress>",
        date: "2025-06-15"
    },
    {
        id: 13,
        title: "アスペクト比の固定（aspect-ratio）",
        language: "CSS",
        code: ".video-container {\n    width: 100%;\n    aspect-ratio: 16 / 9;\n}",
        date: "2025-07-04"
    },
    {
        id: 14,
        title: "URLのクエリパラメータを取得",
        language: "JavaScript",
        code: "const params = new URLSearchParams(window.location.search);\nconst id = params.get('id');",
        date: "2025-07-22"
    },
    {
        id: 15,
        title: "要素のホバー時にふわっと拡大",
        language: "CSS",
        code: ".card {\n    transition: transform 0.3s;\n}\n.card:hover {\n    transform: scale(1.05);\n}",
        date: "2025-08-11"
    },
    {
        id: 16,
        title: "ダイアログ要素（ポップアップ）",
        language: "HTML",
        code: "<dialog id=\"favDialog\">\n    <p>これはダイアログです</p>\n    <button id=\"closeBtn\">閉じる</button>\n</dialog>",
        date: "2025-08-30"
    },
    {
        id: 17,
        title: "数値をカンマ区切りの文字列にする",
        language: "JavaScript",
        code: "const formatted = (1234567).toLocaleString(); // \"1,234,567\"",
        date: "2025-09-14"
    },
    {
        id: 18,
        title: "グラデーションテキスト",
        language: "CSS",
        code: ".gradient-text {\n    background: linear-gradient(to right, red, blue);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}",
        date: "2025-10-05"
    },
    {
        id: 19,
        title: "ローカルストレージへの保存",
        language: "JavaScript",
        code: "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');",
        date: "2025-11-20"
    },
    {
        id: 20,
        title: "遅延読み込み（Loading Lazy）",
        language: "HTML",
        code: "<img src=\"image.jpg\" loading=\"lazy\" alt=\"遅延読み込み画像\">",
        date: "2025-12-25"
    }
];

const cardList = document.querySelector('.card-list');

// 画面に描画する関数
function render() {
    // 1. リストを空にする
    cardList.innerHTML = '';

    // 2. データの数だけループしてHTMLを生成
    Snippets.forEach(snippet => {
        const html = `
                        <li class="card-list-item">
                        <div class="card-header">
                            <h2>${snippet.title}</h2>
                            <div class="language-label lang-${snippet.language.toLowerCase()}">${snippet.language}</div>
                        </div>

        <pre><code>${snippet.code}</code></pre>

                        <div class="card-footer">
                            <dd>${snippet.date}</dd>

                            <div class="action-buttons">
                                <button class="icon-btn copy-btn" title="コピー">
                                    <i class="fa-regular fa-copy"></i>
                                </button>

                                <!-- 編集ボタン -->
                                <button class="icon-btn edit-btn" title="編集">
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </button>

                                <!-- 削除ボタン -->
                                <button class="icon-btn delete-btn" title="削除">
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                        </li>
        `;
        cardList.insertAdjacentHTML('beforeend', html);
    });
}

render();