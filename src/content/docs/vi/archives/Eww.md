---
title: Eww
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Deprecated
    variant: caution
lastUpdated: 2024-02-18
---

:::caution[Cảnh báo]
Các config này mình không dùng nữa mà nó cũng không hoạt động nên tốt nhất đừng dùng
:::

# Cài đặt
- Copy
    - `.config`, `.local` vào thư mục home
    - Các thứ trong `.local/share/icons` vào `/usr/share/icons`
    - Stuff in `Import manually` folder if you need them

## Hiệu năng
|  ⌄           | Nên dùng | Không nên dùng  | Ghi chú                               |
| ------------ | -------- | --------------- | ------------------------------------- |
| Kernel       |          | cachyos, xanmod | Đừng lạm đụng mấy cái tiết kiệm điện  |
| Login shell  | bash/zsh | fish            | Dùng fish trong terminal không sao cả |

 ## Setup
 - Các eww config chỉ hoạt động tử tế trong `~/.config/eww`
 - Khởi động: `eww daemon`
 - Mở top bar: `eww open bar`
 - Mở thanh Windows: `eww open winbar` (`windoes`/`hybrid` branch)
 - Mở viền bên dưới màn hình: `eww open bottomline` (1px, để bấm vào nó hiện điều khiển nhạc)
 - Mở overview (click chuột giữa vào workspace indicator trên top bar) và dợi 10s (để nó sinh cache, không thì icon không hiện hết)
 ## Sử dụng
 - Điều khiển nhạc: Middle-click: Play/Pause, Right-click: Next track, lăn chuột để chỉnh âm thanh
 - Mở overview: clickchuoojt giữa/phải vào workspace indicators hoặc chạy `eww open overview`
 - Trong overview, gõ để tìm kiếm
 ## Tìm kiếm
 - Gõ dể tìm kiếm ứng dụng
 - Gõ phép toán để tính bằng `qalc`
 - `>save THEME`: Nhớ theme tên là THEME.
 - `>load THEME`: Sử dụng theme tên THEME. Các theme sẵn có sẽ hiện ra khi gõ.
 - `>music`: Lấy color scheme từ cover art của nhạc
 - `>wall`: Lấy color scheme từ ảnh ở `~/.config/eww/images/wallpaper/wallpaper`
 - `>light`: Những lần generate màu sau sử dụng light mode
 - `>dark`: Những lần generate màu sau sử dụng dark mode
 - `>one`: Những lần generate màu sau sử dụng 1 màu (Material colors)
 - `>multi`: Những lần generate màu sau sử dụng nhiều màu (pywal)
 - `>r`: Reload (chạy lại eww với top bả mặc định)
 
