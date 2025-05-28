# FINE PARTY ANNO - Sito Web

Un sito web moderno e accattivante per il party di fine anno scolastico che si terrà al Yourban di Thiene.

## Dettagli Evento

- **Data:** 13 Giugno 2025
- **Orario:** Dalle 21:30 alle 2:30
- **Luogo:** Yourban Thiene, Via 51 Stormo
- **Biglietto:** 15€
- **Regolamento:** [Link al regolamento](https://docs.google.com/document/d/1FEq0rbI_3VK03HsbbdghGtxILGtjUVXOvH3JnSzi8TU/edit?usp=sharing)

## Caratteristiche del sito

- Design moderno e responsive ispirato alla locandina ufficiale
- Animazioni e transizioni fluide
- Contatori in tempo reale per le iscrizioni
- Supporto per tre tipi di iscrizione (studenti quinte, studenti quarte, ospiti)
- Link diretto al modulo per invitare amici

## Come hostare su GitHub Pages

### 1. Crea un repository su GitHub

1. Accedi al tuo account GitHub
2. Crea un nuovo repository (pubblico)
3. Dai un nome al repository (es. `fine-party-anno`)

### 2. Carica i file nel repository

Usa Git da terminale:

```bash
# Inizializza il repository Git locale
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Primo commit: versione iniziale del sito"

# Collega il repository locale a quello remoto
git remote add origin https://github.com/TUO-USERNAME/fine-party-anno.git

# Carica i file sul repository remoto
git push -u origin master
```

### 3. Abilita GitHub Pages

1. Vai alle impostazioni del repository su GitHub
2. Scorri fino alla sezione "GitHub Pages"
3. Seleziona "master branch" come sorgente
4. Clicca su "Save"

Il sito sarà disponibile all'indirizzo: `https://TUO-USERNAME.github.io/fine-party-anno/`

## Personalizzazione

### Modifica dei contatori

Per modificare i numeri di iscritti iniziali, puoi modificare i valori nei badge all'interno del file `index.html`:

```html
<span class="count-badge">95</span> <!-- Quinte -->
<span class="count-badge">18</span> <!-- Quarte -->
<span class="count-badge">23</span> <!-- Guest -->
```

### Modifica dei dettagli dell'evento

Per modificare data, ora e luogo dell'evento, aggiorna le seguenti righe in `index.html`:

```html
<span>13 Giugno 2025</span> <!-- Data -->
<span>Dalle 21:30 alle 2:30</span> <!-- Orario -->
<span>Yourban Thiene, Via 51 Stormo</span> <!-- Luogo -->
<span>Biglietto: 15€</span> <!-- Prezzo -->
```

## Tecnologie utilizzate

- HTML5
- CSS3 (con animazioni e transizioni)
- JavaScript (vanilla)

## Licenza

Questo progetto è disponibile con licenza MIT. 