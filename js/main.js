/**
 * 珂珂的信 - 主脚本
 * 信封交互
 */

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
