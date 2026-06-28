/**
 * 珂珂的信 - 主脚本
 * 信封交互 + 回信功能
 */

// ========================================
// 信封交互
// ========================================

// 打开信封
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const hint = document.getElementById('clickHint');
    const resetBtn = document.getElementById('resetBtn');

    envelope.classList.add('opened');
    letter.classList.add('show');
    hint.style.display = 'none';
    resetBtn.classList.add('show');

    // 检查是否有保存的回信
    loadReply();
}

// 重新封装
function resetEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const hint = document.getElementById('clickHint');
    const resetBtn = document.getElementById('resetBtn');

    letter.classList.remove('show');
    setTimeout(() => {
        envelope.classList.remove('opened');
        hint.style.display = 'block';
        resetBtn.classList.remove('show');
    }, 300);
}

// ========================================
// 回信功能
// ========================================

// 加载已保存的回信
function loadReply() {
    const saved = localStorage.getItem('keke_reply');
    const replyEnvelope = document.getElementById('replyEnvelope');
    const replyWriteBtn = document.getElementById('replyWriteBtn');

    if (saved) {
        replyEnvelope.classList.add('show');
        replyWriteBtn.classList.add('hidden');
    } else {
        replyEnvelope.classList.remove('show');
        replyWriteBtn.classList.remove('hidden');
    }
}

// 打开小信封查看回信
function openReply() {
    const saved = localStorage.getItem('keke_reply');
    if (saved) {
        alert(saved);
    }
}

// 显示编辑器
function showEditor() {
    const editor = document.getElementById('replyEditor');
    const writeBtn = document.getElementById('replyWriteBtn');
    const input = document.getElementById('replyInput');
    const resetBtn = document.getElementById('resetBtn');

    editor.classList.add('show');
    writeBtn.classList.add('hidden');
    resetBtn.classList.remove('show');
    input.focus();
}

// 保存回信
function saveReply() {
    const input = document.getElementById('replyInput');
    const text = input.value.trim();
    const resetBtn = document.getElementById('resetBtn');

    if (text) {
        localStorage.setItem('keke_reply', text);
        input.value = '';
        document.getElementById('replyEditor').classList.remove('show');
        resetBtn.classList.add('show');
        loadReply();
    }
}

// 取消编辑
function cancelReply() {
    const editor = document.getElementById('replyEditor');
    const input = document.getElementById('replyInput');
    const resetBtn = document.getElementById('resetBtn');

    editor.classList.remove('show');
    input.value = '';
    resetBtn.classList.add('show');
    loadReply();
}
