// 科比历史数据
const kobeStats = {
    '1996': {
        season: '1996-1997',
        team: '洛杉矶湖人队',
        games: 71,
        points: 7.6,
        rebounds: 1.9,
        assists: 1.3,
        steals: 0.7,
        blocks: 0.3,
        fgPct: 0.417,
        threePct: 0.375,
        ftPct: 0.819,
        description: '科比作为高中生新秀，在首个赛季主要担任替补，展现了出色的潜力和天赋。'
    },
    '2000': {
        season: '2000-2001',
        team: '洛杉矶湖人队',
        games: 68,
        points: 28.5,
        rebounds: 5.9,
        assists: 5.0,
        steals: 1.7,
        blocks: 0.6,
        fgPct: 0.464,
        threePct: 0.305,
        ftPct: 0.853,
        description: '科比帮助湖人队赢得了第二个总冠军，个人数据全面提升，成为联盟顶级得分手。'
    },
    '2005': {
        season: '2005-2006',
        team: '洛杉矶湖人队',
        games: 80,
        points: 35.4,
        rebounds: 5.3,
        assists: 4.5,
        steals: 1.8,
        blocks: 0.4,
        fgPct: 0.450,
        threePct: 0.347,
        ftPct: 0.850,
        description: '这个赛季科比场均得到35.4分，创造了个人职业生涯新高，并在对阵猛龙队的比赛中砍下81分。'
    },
    '2009': {
        season: '2009-2010',
        team: '洛杉矶湖人队',
        games: 73,
        points: 27.0,
        rebounds: 5.4,
        assists: 5.0,
        steals: 1.5,
        blocks: 0.3,
        fgPct: 0.456,
        threePct: 0.329,
        ftPct: 0.811,
        description: '科比带领湖人队赢得了第五个总冠军，并获得了总决赛MVP，成为湖人队历史上最伟大的球员之一。'
    },
    '2016': {
        season: '2015-2016',
        team: '洛杉矶湖人队',
        games: 66,
        points: 17.6,
        rebounds: 3.7,
        assists: 2.8,
        steals: 0.9,
        blocks: 0.2,
        fgPct: 0.358,
        threePct: 0.285,
        ftPct: 0.826,
        description: '这是科比的最后一个赛季，他在最后一场比赛中砍下60分，完美谢幕。'
    }
};

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化：显示高中时期内容
    showSection('high-school');
    
    // 汉堡菜单交互
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    hamburgerMenu.addEventListener('click', function() {
        // 切换汉堡菜单状态
        this.classList.toggle('active');
        // 切换导航菜单显示状态
        navMenu.classList.toggle('active');
    });
    
    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.nav-link, .dropdown a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 关闭导航菜单
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            // 处理导航链接点击
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
            
            // 处理历史数据链接点击
            const year = this.getAttribute('data-year');
            if (year) {
                showStats(year);
                showSection('stats');
            }
        });
    });
    
    // 下拉菜单链接事件监听
    const dropdownLinks = document.querySelectorAll('.dropdown a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 处理生涯介绍子菜单
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
            
            // 处理历史数据子菜单
            const year = this.getAttribute('data-year');
            if (year) {
                showStats(year);
                showSection('stats');
            }
        });
    });
    
    // 视频卡片事件监听
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            if (videoUrl) {
                playVideo(videoUrl);
            }
        });
    });
    
    // 关闭视频播放器
    const closePlayer = document.getElementById('close-player');
    closePlayer.addEventListener('click', function() {
        closeVideo();
    });
    
    // 点击播放器外部关闭
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideo();
        }
    });
});

// 显示指定内容区域
function showSection(sectionId) {
    // 隐藏所有内容区域
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示指定内容区域
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// 显示历史数据
function showStats(year) {
    const stats = kobeStats[year];
    const statsDisplay = document.getElementById('stats-display');
    
    if (stats) {
        statsDisplay.innerHTML = `
            <h4>${stats.season} - ${stats.team}</h4>
            <p>${stats.description}</p>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-value">${stats.points}</span>
                    <span class="stat-label">场均得分</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${stats.rebounds}</span>
                    <span class="stat-label">场均篮板</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${stats.assists}</span>
                    <span class="stat-label">场均助攻</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${stats.steals}</span>
                    <span class="stat-label">场均抢断</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${stats.blocks}</span>
                    <span class="stat-label">场均盖帽</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${(stats.fgPct * 100).toFixed(1)}%</span>
                    <span class="stat-label">投篮命中率</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${(stats.threePct * 100).toFixed(1)}%</span>
                    <span class="stat-label">三分命中率</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${(stats.ftPct * 100).toFixed(1)}%</span>
                    <span class="stat-label">罚球命中率</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${stats.games}</span>
                    <span class="stat-label">出场次数</span>
                </div>
            </div>
        `;
    } else {
        statsDisplay.innerHTML = `
            <h4>数据不可用</h4>
            <p>抱歉，未找到该年份的统计数据。</p>
        `;
    }
}

// 播放视频
function playVideo(videoUrl) {
    const videoFrame = document.getElementById('video-frame');
    const localVideo = document.getElementById('local-video');
    const videoPlayer = document.getElementById('video-player');
    
    // 检测是否为 YouTube 视频
    if (videoUrl.includes('youtube.com/embed/')) {
        // 显示 YouTube 播放器，隐藏本地视频播放器
        videoFrame.style.display = 'block';
        localVideo.style.display = 'none';
        videoFrame.src = videoUrl;
    } else {
        // 显示本地视频播放器，隐藏 YouTube 播放器
        videoFrame.style.display = 'none';
        localVideo.style.display = 'block';
        localVideo.src = videoUrl;
        localVideo.load();
        localVideo.play();
    }
    
    videoPlayer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭视频
function closeVideo() {
    const videoFrame = document.getElementById('video-frame');
    const localVideo = document.getElementById('local-video');
    const videoPlayer = document.getElementById('video-player');
    
    // 重置 YouTube 播放器
    videoFrame.src = '';
    videoFrame.style.display = 'block';
    
    // 重置本地视频播放器
    localVideo.src = '';
    localVideo.style.display = 'none';
    
    videoPlayer.classList.remove('active');
    document.body.style.overflow = 'auto';
}
