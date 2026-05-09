const cardTemplate = `
                <li class="card-list-item">
                   <div class="card-header">
                    <h2>${title}</h2>
                    <div class="language-label">${language}</div>
                   </div>

<pre><code>${code}</code></pre>

                   <div class="card-footer">
                    <dd>${date}</dd>

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