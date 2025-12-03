/* [DATA & LOGIC] */

// 1. 데이터베이스
const db = {
    stories: {
        1: `<strong>[A Tight Squeeze] (조여오는 압박)</strong><br>
            <em>발매일: 2021년 10월 12일</em><br><br>
            버려진 장난감 공장의 공포 속에서 살아남아야 합니다.<br><br>
            <strong>개요:</strong><br>
            전직 직원이었던 당신은 "우리는 아직 여기 있다"라는 편지를 받고 10년 만에 폐쇄된 Playtime Co. 공장으로 돌아옵니다.
            한때 아이들의 웃음소리가 끊이지 않던 이곳은 이제 복수심에 불타는 장난감들이 지배하고 있습니다. 당신은 그랩팩(GrabPack)을 활용해 전력을 복구하고, 공장의 마스코트인 '허기워기'의 추격을 따돌려야 합니다.
            <br><br><strong>주요 특징:</strong>
            <ul>
                <li><strong>그랩팩(GrabPack):</strong> 멀리 있는 물건을 잡거나 전기를 전도할 수 있는 다기능 가방을 활용해 퍼즐을 해결하세요.</li>
                <li><strong>허기워기(Huggy Wuggy):</strong> 공장의 귀여운 마스코트였던 그가 이제는 날카로운 이빨을 드러내고 당신을 사냥합니다.</li>
                <li><strong>파피의 해방:</strong> 챕터의 끝에서 케이스에 갇힌 지능형 인형 '파피'를 구출하며 이야기가 시작됩니다.</li>
            </ul>
            <br><strong>Steam 공식 설명:</strong><br>
            "이 공포/퍼즐 어드벤처에서 살아남아야 합니다. 버려진 장난감 공장에서 당신을 기다리는 복수심에 불타는 장난감들로부터 살아남으십시오. 그랩팩을 사용하여 전기 회로를 해킹하거나 멀리 있는 물건을 잡으세요. 시설을 탐험하되, 들키지 마십시오."
            <br><br><strong>경고:</strong> 이 섹션에는 스포일러가 포함되어 있습니다.`,
        
        2: `<strong>[Fly in a Web] (거미줄에 걸린 파리)</strong><br>
            <em>발매일: 2022년 5월 5일</em><br><br>
            공장 더 깊은 곳, 기차역에서 탈출을 시도하지만 마미 롱 레그가 당신을 방해합니다.<br><br>
            <strong>개요:</strong><br>
            파피를 구해주었지만, 갑자기 나타난 거미 형태의 인형 '마미 롱 레그'에게 납치당합니다. 
            그녀는 당신의 그랩팩 빨간 손을 빼앗고, 공장을 탈출하기 위한 기차 코드를 얻으려면 '게임 스테이션'에서 세 가지 치명적인 테스트를 통과하라고 강요합니다.
            <br><br><strong>주요 특징:</strong>
            <ul>
                <li><strong>게임 스테이션:</strong> 뮤지컬 메모리, 왝 어 워기, 스태츄 등 세 가지 목숨을 건 미니게임을 클리어해야 합니다.</li>
                <li><strong>새로운 능력:</strong> 전기를 충전하여 저장할 수 있는 '초록색 손'을 획득하여 더 복잡한 퍼즐을 해결하세요.</li>
                <li><strong>새로운 적들:</strong> 번조 버니, PJ 퍼그-어-필라, 그리고 무시무시한 마미 롱 레그가 당신을 노립니다.</li>
            </ul>
            <br><strong>Steam 공식 설명:</strong><br>
            "기차역을 탐험하고 새로운 장난감들을 마주하세요. 마미 롱 레그가 당신과 게임을 하고 싶어 합니다. 그녀의 게임을 통과하고, 그녀가 숨기고 있는 비밀을 밝혀내세요."
            <br><br><strong>경고:</strong> 이 섹션에는 스포일러가 포함되어 있습니다.`,
        
        3: `<strong>[Deep Sleep] (깊은 잠)</strong><br>
            <em>발매일: 2024년 1월 30일</em><br><br>
            기차 충돌 후 도착한 곳은 황폐해진 보육원, 플레이케어입니다.<br><br>
            <strong>개요:</strong><br>
            플레이케어(Playcare)는 공장 내 거대한 보육 시설입니다. 이곳의 공기는 붉은 연기로 오염되어 있어, 당신은 방독면을 쓰고 환각과 질식의 위협을 피해야 합니다.
            붉은 연기를 내뿜는 거대한 괴물 '캣냅'이 지배하는 이곳에서, 당신은 올리의 도움을 받아 전력을 복구하고 '기쁨의 시간'에 대한 진실에 다가가야 합니다.
            <br><br><strong>주요 특징:</strong>
            <ul>
                <li><strong>광활한 맵:</strong> 역대 가장 큰 규모의 맵인 플레이케어를 탐험하세요.</li>
                <li><strong>업그레이드된 장비:</strong> 가스 마스크와 더 높이 점프할 수 있는 '보라색 손', 조명탄을 쏘는 '주황색 손'을 활용하세요.</li>
                <li><strong>캣냅(CatNap):</strong> 프로토타입을 숭배하는 붉은 연기의 지배자, 캣냅과 스마일링 크리터즈의 악몽에서 살아남으세요.</li>
            </ul>
            <br><strong>Steam 공식 설명:</strong><br>
            "폐허가 된 보육원 아래에는 끔찍한 비밀이 숨겨져 있습니다. 캣냅과 스마일링 크리터즈의 악몽에서 깨어나세요. 새로운 장비를 활용하여 더 깊은 곳으로 나아가 진실을 마주하십시오."
            <br><br><strong>경고:</strong> 이 섹션에는 스포일러가 포함되어 있습니다.`,
        
        4: `<strong>[SAFE HAVEN] (피난처)</strong><br>
            <em>발매일: 2025년 1월 31일 [EST]</em><br><br>
            방대한 Poppy Playtime 이야기 사상 가장 암울한 챕터를 맞이할 준비를 하세요.<br><br>
            <strong>개요:</strong><br>
            플레이타임이 만들어 낸 지옥 속으로 더 깊이 들어간 당신은 프로토타입에 복수하겠다는 파피의 계획을 실행합니다. 
            본작은 플레이타임사의 깊숙한 지하, 숨겨진 연구시설과 감옥 등을 배경으로 합니다.
            <br><br><strong>주요 특징:</strong>
            <ul>
                <li><strong>더 깊은 심연으로:</strong> 세상에 드러나 있는 공장 아래 심연으로 점점 깊이 떠밀려 들어갑니다.</li>
                <li><strong>백골 시체의 등장:</strong> '기쁨의 시간' 직후 시체들을 지하로 끌고 내려갔다는 설정이 반영되어, 백골이 된 인간 시체들이 처음으로 등장합니다.</li>
                <li><strong>변경된 생존 시스템:</strong> 기존의 '한 방 즉사' 시스템에서 벗어나, 야나비와 도이 같은 특정 유닛을 제외하고는 공격당하면 화면에 핏자국이 튀며 피해가 누적되는 방식으로 변경되었습니다.</li>
            </ul>
            <br><strong>Steam 공식 설명:</strong><br>
            "그곳에서 새롭고 무시무시한 위협을 마주하고, 충격적인 진실을 밝혀내 보세요. 과연 그림자 속에 도사린 초현실적인 새 창조물들을 따돌릴 수 있을까요? 실험 뒤에 감춰진 수수께끼를 밝혀낼 때까지 살아남을 수는 있을까요? 한 걸음 내디딜 때마다 용기가 시험받고, 퍼즐 하나하나가 머릿속을 뒤죽박죽으로 헝클어뜨리며, 모퉁이를 돌 때마다 마지막을 각오해야 할 겁니다."
            <br><br><strong>경고:</strong> 이 섹션에는 스포일러가 포함되어 있습니다.`
    },
    characters: [
        { 
            id: 1, season: 1, name: "Huggy Wuggy", nameKR: "허기워기", 
            role: "보안 / 마스코트", gender: "남성", color: "파란색 (Blue)",
            desc: "Playtime Co.의 가장 성공적인 마스코트입니다. 그는 사람들을 안아주기 위해 만들어졌지만(Hugs), 공장의 보안 시스템으로도 작동합니다. 챕터 1의 메인 빌런입니다.", 
            egg: "이스터에그: 벤트 안의 1006번 실험체 기록", icon: "fa-frog" 
        },
        { 
            id: 2, season: 1, name: "Poppy Playtime", nameKR: "파피", 
            role: "지능형 인형", gender: "여성", color: "빨강/하얀색",
            desc: "세계 최초의 지능을 가진 인형입니다. 케이스에 갇혀 있었으나 주인공에 의해 풀려납니다. 그녀의 진짜 목적은 아직 불분명합니다.", 
            egg: "이스터에그: 오프닝 비디오 눈동자 반사", icon: "fa-child-dress" 
        },
        { 
            id: 3, season: 2, name: "Mommy Long Legs", nameKR: "마미 롱 레그", 
            role: "게임 스테이션 관리자", gender: "여성", color: "분홍색 (Pink)",
            desc: "신축성 있는 플라스틱으로 만들어진 거미 형태의 인형입니다. 아이들을 돌보는 엄마 역할을 했으나, 현재는 잔인한 게임의 주최자입니다.", 
            egg: "이스터에그: 천장 위 감시실", icon: "fa-spider" 
        },
        { 
            id: 5, season: 3, name: "CatNap", nameKR: "캣냅", 
            role: "수면 유도 / 보안", gender: "남성", color: "보라색 (Purple)",
            desc: "Smiling Critters의 일원입니다. 붉은 양귀비 가스를 뿜어 아이들을 재우거나 환각을 보게 합니다. 프로토타입을 신처럼 숭배합니다.", 
            egg: "이스터에그: 뉴스 화면의 그림자", icon: "fa-cat" 
        },
        /* 챕터 4 신규 캐릭터 */
        {
            id: 6, season: 4, name: "Baba Chops", nameKR: "바바 찹스",
            role: "신규 적대적 장난감", gender: "미상", color: "미상",
            desc: "챕터 4에 새롭게 등장하는 캐릭터입니다. 상세 정보는 게임 발매 후 업데이트될 예정입니다.",
            egg: "정보 수집 중...", icon: "fa-skull"
        },
        {
            id: 7, season: 4, name: "Yarnaby", nameKR: "야나비",
            role: "즉사 공격 유닛", gender: "미상", color: "실타래?",
            desc: "플레이어를 한 번에 즉사시킬 수 있는 강력한 몬스터 중 하나입니다. 챕터 4의 깊은 심연에서 마주칠 수 있습니다.",
            egg: "즉사 패턴 주의", icon: "fa-ghost"
        },
        {
            id: 8, season: 4, name: "The Doctor", nameKR: "박사",
            role: "주요 인물/적", gender: "미상", color: "미상",
            desc: "챕터 4의 핵심적인 역할을 할 것으로 보이는 인물입니다. 실험 뒤에 감춰진 수수께끼와 관련이 깊습니다.",
            egg: "연구 기록에서 언급됨", icon: "fa-user-md"
        },
        {
            id: 9, season: 4, name: "Doughy the Doughman", nameKR: "도이 더 도우맨",
            role: "즉사 공격 유닛", gender: "남성 추정", color: "반죽색",
            desc: "야나비와 함께 플레이어를 한 방에 처치할 수 있는 위협적인 적입니다. 반죽(Dough)을 모티브로 한 기괴한 외형을 가졌을 것으로 추정됩니다.",
            egg: "제빵실 구역?", icon: "fa-cookie-bite"
        }
    ],
    comments: [
        { id: 1, user: "Wiki_Admin", role: "host", text: "문서 수정 시 출처를 남겨주세요.", likes: 99 },
        { id: 2, user: "PoppyFan", role: "guest", text: "캣냅 설정 너무 무섭네요 ㄷㄷ", likes: 14 }
    ]
};

let currentUser = null;

// 2. 라우터 및 렌더링 함수
function router(page, param = null) {
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    const navBtn = document.getElementById(`nav-${page}`);
    if(navBtn) navBtn.classList.add('active');

    const main = document.getElementById('main-content');
    main.style.opacity = 0; 

    setTimeout(() => {
        if (page === 'home') renderHome(main);
        else if (page === 'characters') renderCharacterPage(main, param);
        else if (page === 'story') renderStory(main);
        else if (page === 'community') renderCommunity(main);
        
        main.style.opacity = 1;
    }, 100);
}

// 홈 렌더링
function renderHome(target) {
    target.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Playtime Co. Wiki</h1>
        </div>
        <div style="background:#2a2a2e; padding:20px; border-left: 5px solid var(--primary-accent); margin-bottom:20px;">
            <strong>환영합니다!</strong><br>
            이곳은 호러 게임 파피플레이 타임(Poppy Playtime)의 캐릭터, 스토리, 비밀을 정리하는 위키입니다.
            누구나 참여하여(호스트/게스트) 정보를 공유할 수 있습니다.
        </div>

        <h2>주요 문서 (Featured Articles)</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top:15px;">
            ${db.characters.slice(0, 3).map(c => `
                <div onclick="router('characters', ${c.id})" style="background:#222; padding:15px; cursor:pointer; border:1px solid #444; text-align:center;">
                    <i class="fa-solid ${c.icon}" style="font-size:2rem; color:var(--primary-accent); margin-bottom:10px;"></i>
                    <div style="font-weight:bold; color:var(--link-color);">${c.name}</div>
                </div>
            `).join('')}
        </div>

        <h2>최신 뉴스</h2>
        <ul>
            <li><strong style="color:var(--primary-accent)">챕터 4 'SAFE HAVEN' 정보 업데이트!</strong></li>
            <li>신규 캐릭터: 바바 찹스, 야나비, 박사, 도이 추가됨</li>
            <li>2025년 1월 31일 발매 확정</li>
        </ul>
    `;
}

// 캐릭터 페이지 렌더링
function renderCharacterPage(target, charId) {
    if (!charId) {
        target.innerHTML = `
            <div class="page-header"><h1 class="page-title">캐릭터 목록</h1></div>
            <p>문서를 보려면 오른쪽 사이드바의 캐릭터를 클릭하거나 아래 목록을 선택하세요.</p>
            <ul>
                ${db.characters.map(c => `<li style="margin:10px 0;"><a href="#" onclick="router('characters', ${c.id})" style="color:var(--link-color); text-decoration:none;">${c.name} (${c.nameKR})</a> <span style="font-size:0.8em; color:#666;">- 챕터 ${c.season}</span></li>`).join('')}
            </ul>
        `;
        return;
    }

    const char = db.characters.find(c => c.id === charId);
    
    target.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">${char.name}</h1>
            <span style="color: #666; font-size: 0.9rem;">편집자: Playtime_Admin</span>
        </div>

        <aside class="infobox">
            <div class="infobox-header">${char.nameKR}</div>
            <div class="infobox-image">
                <i class="fa-solid ${char.icon}"></i>
            </div>
            <div class="infobox-data">
                <div class="infobox-row">
                    <span class="infobox-label">역할</span>
                    <span class="infobox-value">${char.role}</span>
                </div>
                <div class="infobox-row">
                    <span class="infobox-label">성별</span>
                    <span class="infobox-value">${char.gender}</span>
                </div>
                <div class="infobox-row">
                    <span class="infobox-label">색상</span>
                    <span class="infobox-value" style="color:${char.color.includes('Red') ? '#ffcccc' : 'var(--link-color)'}">${char.color}</span>
                </div>
                <div class="infobox-row">
                    <span class="infobox-label">등장 시즌</span>
                    <span class="infobox-value">챕터 ${char.season}</span>
                </div>
            </div>
        </aside>

        <p><strong>${char.name}</strong>(${char.nameKR})는 <a href="#" style="color:var(--link-color)">Poppy Playtime</a> 챕터 ${char.season}에 등장하는 주요 캐릭터입니다.</p>
        
        <h2>개요 (Overview)</h2>
        <p>${char.desc}</p>
        ${char.season === 4 ? "<p><em>※ 챕터 4 신규 캐릭터로, 현재 알려진 정보가 제한적입니다.</em></p>" : "<p>플레이타임 사(Playtime Co.)에서 아이들에게 가장 인기 있는 장난감 중 하나였으나, 공장 폐쇄 후 괴물로 변모하였습니다.</p>"}

        <h2>트리비아 (Trivia)</h2>
        <ul>
            <li>이 캐릭터의 디자인은 ${char.season === 4 ? '최신 챕터의 어두운 분위기를 반영했습니다.' : '1990년대 장난감에서 영감을 받았습니다.'}</li>
            <li style="color: gold;"><i class="fa-solid fa-star"></i> <strong>이스터에그:</strong> ${char.egg}</li>
        </ul>

        <h2>갤러리</h2>
        <div style="display:flex; gap:10px; margin-top:10px;">
            <div style="width:100px; height:100px; background:#333; display:flex; justify-content:center; align-items:center;"><i class="fa-solid fa-image"></i></div>
            <div style="width:100px; height:100px; background:#333; display:flex; justify-content:center; align-items:center;"><i class="fa-solid fa-image"></i></div>
        </div>
        
        <div style="clear:both;"></div>
        
        <div style="margin-top: 50px; border:1px solid #333; padding:10px; background:#1a1a1a; font-size:0.8rem; text-align:center;">
            분류: <a href="#" style="color:var(--link-color)">캐릭터</a>, <a href="#" style="color:var(--link-color)">챕터 ${char.season}</a>, <a href="#" style="color:var(--link-color)">몬스터</a>
        </div>
    `;
}

// 스토리 렌더링
function renderStory(target) {
    target.innerHTML = `
        <div class="page-header"><h1 class="page-title">스토리라인 (Storyline)</h1></div>
        <div id="story-tabs" style="display:flex; gap:5px; border-bottom:1px solid var(--border-color); margin-bottom:20px;">
        </div>
        <div id="story-text" style="background:#222; padding:20px; border:1px solid #444;">
            줄거리를 보려면 위 시즌 탭을 선택하세요.
        </div>
    `;
    
    const tabContainer = document.getElementById('story-tabs');
    const textContainer = document.getElementById('story-text');

    Object.keys(db.stories).forEach((season, idx) => {
        const btn = document.createElement('button');
        btn.innerText = `챕터 ${season}`;
        btn.style.padding = "10px 20px";
        btn.style.background = idx === 0 ? "var(--content-bg)" : "#111";
        btn.style.border = "1px solid var(--border-color)";
        btn.style.borderBottom = "none";
        btn.style.color = "white";
        btn.style.cursor = "pointer";
        
        btn.onclick = () => {
            Array.from(tabContainer.children).forEach(b => {
                b.style.background = "#111"; 
                b.style.color="#aaa";
            });
            btn.style.background = "var(--content-bg)";
            btn.style.color = "var(--primary-accent)";
            
            textContainer.innerHTML = `
                <h3>파피 플레이타임 챕터 ${season}</h3>
                ${db.stories[season]}
            `;
        };

        if(idx === 0) btn.click();
        tabContainer.appendChild(btn);
    });
}

// 커뮤니티 렌더링
function renderCommunity(target) {
    target.innerHTML = `
        <div class="page-header"><h1 class="page-title">커뮤니티 토론</h1></div>
        
        <div class="comment-box">
            <h3 style="margin-top:0;">메시지 남기기</h3>
            <textarea id="comm-input" style="width:100%; height:80px; background:#111; color:white; border:1px solid #444; padding:10px; box-sizing:border-box;" placeholder="토론에 참여하세요..."></textarea>
            <button onclick="addComment()" style="margin-top:10px; padding:5px 15px; background:var(--primary-accent); color:white; border:none; cursor:pointer;">댓글 등록</button>
        </div>

        <div id="comm-list"></div>
    `;
    renderCommentList();
}

function renderCommentList() {
    const list = document.getElementById('comm-list');
    if(!list) return;
    list.innerHTML = db.comments.map(c => `
        <div style="border-bottom:1px solid #333; padding:15px 0;">
            <div class="comment-header-row">
                <span><i class="fa-solid fa-user"></i> ${c.user} <span style="background:${c.role==='host'?'gold':'#444'}; color:${c.role==='host'?'black':'white'}; font-size:0.7rem; padding:1px 4px; border-radius:3px;">${c.role === 'host' ? '호스트' : '게스트'}</span></span>
                <span>${new Date().toLocaleDateString()}</span>
            </div>
            <div style="font-size:0.95rem;">${c.text}</div>
            <div style="font-size:0.8rem; color:#666; margin-top:5px;">좋아요: ${c.likes}</div>
        </div>
    `).join('');
}

function addComment() {
    if(!currentUser) {
        Swal.fire({ title: '로그인 필요', text: '글을 쓰려면 로그인하세요.', icon: 'warning', background: '#222', color: 'white' });
        return;
    }
    const txt = document.getElementById('comm-input').value;
    if(!txt) return;

    db.comments.unshift({
        id: Date.now(),
        user: currentUser.name,
        role: currentUser.role,
        text: txt,
        likes: 0
    });
    renderCommentList();
    document.getElementById('comm-input').value = "";
}

// 3. 초기화 및 유틸리티
function initQuickLinks() {
    const container = document.getElementById('quick-links');
    container.innerHTML = db.characters.map(c => `
        <div class="char-list-item" onclick="router('characters', ${c.id})">
            <i class="fa-solid ${c.icon}" style="width:25px;"></i> ${c.name}
        </div>
    `).join('');
}

function handleAuth() {
    if(currentUser) {
        currentUser = null;
        document.getElementById('auth-area').innerHTML = `<button class="login-btn" onclick="handleAuth()">로그인</button>`;
        Swal.fire({ title: '로그아웃됨', icon: 'success', background: '#222', color: 'white', timer: 1500, showConfirmButton: false });
    } else {
        Swal.fire({
            title: '위키 로그인',
            background: '#222',
            color: 'white',
            html: `
                <input id="swal-id" class="swal2-input" placeholder="닉네임" style="background:#111; color:white;">
                <select id="swal-role" class="swal2-input" style="background:#111; color:white;">
                    <option value="guest">게스트 (독자)</option>
                    <option value="host">호스트 (편집자)</option>
                </select>
            `,
            confirmButtonColor: '#e63946',
            confirmButtonText: '로그인',
            preConfirm: () => {
                return [
                    document.getElementById('swal-id').value,
                    document.getElementById('swal-role').value
                ]
            }
        }).then((res) => {
            if(res.isConfirmed) {
                const name = res.value[0] || "User";
                currentUser = { name, role: res.value[1] };
                document.getElementById('auth-area').innerHTML = `
                    <div style="text-align:right;">
                        <div style="font-size:0.8rem; color:#aaa;">${currentUser.role === 'host' ? '호스트' : '게스트'}</div>
                        <div style="font-weight:bold;">${currentUser.name}</div>
                    </div>
                    <button class="login-btn" onclick="handleAuth()" style="background:#444; margin-left:10px;">나가기</button>
                `;
            }
        });
    }
}

// 페이지 로드 시 시작
document.addEventListener('DOMContentLoaded', () => {
    initQuickLinks();
    router('home');
});