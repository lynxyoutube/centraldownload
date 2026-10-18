/**
 * ===================================================================
 *  BASE DE DADOS DE DOWNLOADS - CANAL LYNX
 * ===================================================================
 *  Para adicionar um novo download, basta copiar o bloco abaixo,
 *  colar no início do array DOWNLOADS_DATA e preencher com os dados do seu vídeo!
 * 
 *  Campos:
 *  - id: Número único (1, 2, 3...)
 *  - title: Nome do arquivo ou tutorial
 *  - category: "otimizacoes", "packs", "programas"
 *  - description: Breve resumo do que é o arquivo
 *  - thumbnail: Nome da imagem (ex: "thumb-roblox.jpg") ou link da thumbnail do YouTube
 *  - youtubeUrl: Link do seu vídeo no YouTube
 *  - downloadUrl: Link principal para baixar (Google Drive, MediaFire, Mega, etc.)
 *  - mirrorUrl: Link alternativo caso o principal caia (opcional)
 *  - size: Tamanho ou formato do arquivo (ex: "Fast By Lynx.rar" ou "150 MB")
 *  - date: Data em que foi postado
 *  - password: Senha de descompactação se houver (se não tiver, deixe "")
 *  - featured: true se você quiser destaque no topo, ou false
 * ===================================================================
 */

const DOWNLOADS_DATA = [
  {
    id: 2,
    title: "Otimização para qualquer pc fraco (2026)",
    category: "otimizacoes",
    description: "Script completo de otimização para PC fraco (otimizador.bat). Limpa arquivos temporários, ativa o modo de alto desempenho e reduz drasticamente o consumo de CPU e memória RAM para máximo FPS sem lag.",
    thumbnail: "thumb-otimizacao-pc.jpg",
    youtubeUrl: "",
    downloadUrl: "https://drive.google.com/file/d/1Yqh_P9x1qbOl7fdSGkdvSYN1GY3kNh9T/view?usp=drive_link",
    mirrorUrl: "https://www.mediafire.com/file/8b992ajd30pmta8/Otimização.rar/file",
    size: "4.06 KB",
    date: "18/10/2026",
    password: "",
    featured: true
  },
  {
    id: 1,
    title: "Método funcional ! fastflags em pc fraco 2026 ROBLOX",
    category: "otimizacoes",
    description: "Configuração completa de FastFlags (JSON) para Roblox. Reduz drasticamente o uso de CPU e RAM, desbloqueia taxa de quadros e garante desempenho máximo mesmo em PC fraco.",
    thumbnail: "thumb-fastflag.jpg",
    youtubeUrl: "https://youtu.be/1Djp6HB-oL0?si=fpQlBFfTon6UozUW",
    downloadUrl: "https://drive.google.com/file/d/1tGaqd13sg4LHEsCRrkBtJBtmpxg6aT6J/view?usp=drive_link",
    mirrorUrl: "https://www.mediafire.com/file/u3yyyv1ac5296uq/Fast+By+Lynx.rar/file",
    size: "87.63 KB",
    date: "16/10/2026",
    password: "",
    featured: false
  }
];
