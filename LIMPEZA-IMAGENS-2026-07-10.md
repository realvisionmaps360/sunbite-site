# Limpeza de imagens — 10/07/2026

Correções aplicadas na auditoria de pré-entrega (`/rv-entrega`), aprovadas pelo Felipe.
Escopo: **apenas** os dois itens abaixo. Nada mais foi tocado.

## 1. Remoção de imagens órfãs (não usadas em nenhum componente)

Confirmado via `grep -rl` em `src/` que nenhum destes arquivos era importado por código:

| Arquivo | Tamanho |
|---|---|
| `src/assets/gallery-choco.jpg` | 2.6M |
| `src/assets/gallery-cup-golden.png` | 2.3M |
| `src/assets/gallery-romana.jpg` | 2.2M |
| `src/assets/gallery-cup.jpg` | 1.4M |
| `src/assets/logo-sunbite.png` | 1.1M |
| `src/assets/gallery-chocolate.jpg` | 1.1M |

**Total removido do bundle: ~10.7MB**

### Como reverter
Os arquivos continuam no histórico do git. Para trazer de volta:
```bash
git checkout <commit-anterior-a-esta-limpeza> -- src/assets/gallery-choco.jpg src/assets/gallery-cup-golden.png src/assets/gallery-romana.jpg src/assets/gallery-cup.jpg src/assets/logo-sunbite.png src/assets/gallery-chocolate.jpg
```
Ou reverter o commit inteiro desta limpeza:
```bash
git revert <hash-do-commit-desta-limpeza>
```

## 2. Otimização de `romana-photo.jpg` (usada de verdade na RomanaSection)

Antes: 4.6MB (foto de câmera, sem compressão).
Processo: mesmo padrão do script `scripts/optimize-gallery.mjs` (resize 1080px de largura, JPEG qualidade 82, mozjpeg).

### Backup do original
O arquivo original (sem compressão) foi salvo em:
```
_assets-originals/romana-photo.jpg
```
Essa pasta é local, fora do `src/`, e não vai para o build do site (seguindo o mesmo padrão que `_gallery-originals/` já usa no projeto).

### Como reverter
```bash
cp _assets-originals/romana-photo.jpg src/assets/romana-photo.jpg
```

---
*Nenhum outro arquivo do repositório foi alterado nesta limpeza. Mudanças pré-existentes não relacionadas (`.claude/launch.json`, `.gitignore`, `index.html`, `CONVITE-HANDOFF.md`, `invitation.html`, `public/og-image.png`) foram deixadas intactas — não fazem parte deste commit.*
