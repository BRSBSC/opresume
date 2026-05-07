import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';

// 路由记忆：进入编辑器即标记当前路由，下次访问 / 时由根 index.html
// 的早期脚本读取并自动重定向到 /editor，避免再走 landing 流程。
// 用户主动回到首页（如点击 logo 或退出按钮）时由调用方清除该标记。
try {
  localStorage.setItem('opresume:last-route', '/editor');
} catch {
  /* 隐私模式等场景下 localStorage 不可写，忽略即可 */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
