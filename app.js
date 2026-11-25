(function () {
  "use strict";

  const FILTERS = [
    { id: "all", label: "All work" },
    { id: "illustration", label: "Illustration" },
    { id: "concept", label: "Character & concept" },
    { id: "games", label: "Games & assets" },
    { id: "code", label: "Code & tools" },
    { id: "crafts", label: "Crafts" },
  ];

  const CAT_LABEL = {
    illustration: "Illustration",
    concept: "Character & concept",
    games: "Games & assets",
    code: "Code & tools",
    crafts: "Crafts",
  };

  const PLEDGE =
    "I made this work myself, from the first composition to the finished piece. I did not use generative AI to produce it, I did not paint over or build on an existing picture, and I did not use elements of another person’s work as if they were my own. If that ever changes, I will take the listing down.";

  const MAKERS = [
    {
      id: "mae",
      name: "Mae Okonkwo",
      craftLabel: "Illustrator",
      place: "Leeds",
      commissions: true,
      bio: "Mae draws editorial illustrations and character portraits from a blank page, never over an existing picture. She posts thumbnail compositions, layered files, and a screen recording of the colour pass with every listing, and takes a small number of commissions.",
    },
    {
      id: "isha",
      name: "Isha Venn",
      craftLabel: "Character and concept artist",
      place: "Glasgow",
      commissions: true,
      bio: "Isha designs original characters and environments for games and books. A commission starts with silhouettes and thumbnails from the brief, not from a scraped reference. Turnarounds, colour passes, and the working files go on the listing.",
    },
    {
      id: "rowan",
      name: "Rowan Hale",
      craftLabel: "Game builder",
      place: "Brighton",
      commissions: false,
      bio: "Rowan makes short games and hand-drawn asset packs. Engine recordings, source assets, and a dev log sit with each release, so a buyer can see the work being built rather than assembled from generated parts.",
    },
    {
      id: "luca",
      name: "Luca Santos",
      craftLabel: "Developer",
      place: "Manchester",
      commissions: false,
      bio: "Luca writes small tools and ships the commit history from the first file, plus short dev notes. The point is to show the code was hand-written, not generated and lightly edited.",
    },
    {
      id: "priya",
      name: "Priya Chand",
      craftLabel: "Potter",
      place: "Frome, Somerset",
      commissions: false,
      bio: "Priya throws functional ware in a small garden studio in Frome. Crafts are a second category here: she films every throwing session, and she does not list 3D-printed work from someone else’s file or an AI-generated file.",
    },
    {
      id: "tom",
      name: "Tom Brennan",
      craftLabel: "Woodworker",
      place: "Hope Valley, Derbyshire",
      commissions: false,
      bio: "Tom makes boards, stools and small furniture from native hardwoods. He leaves the tool marks in, and photographs each piece as it comes off the bench.",
    },
  ];

  const LISTINGS = [
    {
      id: "ferry",
      title: "The night ferry",
      price: "£180",
      category: "illustration",
      makerId: "mae",
      commission: false,
      blurb:
        "An editorial illustration of a night crossing, drawn from a written brief and on-the-spot sketches, not from an existing picture. Sold as a print-ready file with the process attached.",
      proof: "Thumbnails, layered file, and a screen recording of the colour pass",
      art: "ferry",
      stages: [
        { title: "Thumbnails", detail: "Several small compositions, dated, starting from a blank page. No tracing and no painting over a found image." },
        { title: "Line and value", detail: "A refined drawing and a value study. The working file at this stage is on the listing." },
        { title: "Colour pass", detail: "A screen recording of the colour being laid in, so you can see it happen in one sitting." },
        { title: "Finished sheet", detail: "The final illustration plus the layered file. A reverse image search should only find work that looks similar, never this image with tweaks." },
      ],
    },
    {
      id: "portrait",
      title: "Portrait commission",
      price: "From £220",
      category: "illustration",
      makerId: "mae",
      commission: true,
      blurb:
        "A custom three-quarter portrait, drawn from your brief and any photos you supply as reference for likeness only. The composition is invented on the page. You follow the work in stages before the final file is delivered.",
      proof: "Brief, thumbnails, staged files, and a screen recording",
      art: "portrait",
      stages: [
        { title: "The brief", detail: "You describe who or what should be in the portrait. Reference photos, if you send them, are for likeness, not to be painted over." },
        { title: "Thumbnails", detail: "Mae sends original compositions for you to choose from, drawn on a blank canvas." },
        { title: "Work in progress", detail: "Line, value, and colour stages are shared as files, with a screen recording of the main pass." },
        { title: "Delivery", detail: "You receive the finished portrait and the process. You should not be able to Google the final image and find the same picture with tweaks." },
      ],
    },
    {
      id: "rook",
      title: "Rook the cartographer",
      price: "£240",
      category: "concept",
      makerId: "isha",
      commission: false,
      blurb:
        "An original character design and turnaround, built from silhouettes and a written backstory. The finished sheet is unique to this listing; it is not a recolour or a light edit of an existing design.",
      proof: "Silhouettes, turnaround sketches, and the working file",
      art: "character",
      stages: [
        { title: "Silhouettes", detail: "A page of original silhouettes, before any existing character is in the room. Photographed and dated." },
        { title: "Turnaround", detail: "Front, side and three-quarter sketches, still loose, with notes on costume and props." },
        { title: "Colour and detail", detail: "A recorded colour pass and close studies of the map case, boots, and weatherwear." },
        { title: "Design sheet", detail: "The finished character sheet and the process file. A reverse image search should not return the same character with tweaks." },
      ],
    },
    {
      id: "saltmarsh",
      title: "Saltmarsh concept pack",
      price: "£90",
      category: "concept",
      makerId: "isha",
      commission: true,
      blurb:
        "Six environment concepts for a coastal game setting, drawn from a written brief. Isha also takes custom concept sets. Each image starts as a thumbnail, not as a generated base.",
      proof: "Thumbnail boards, stage files, and a recording of one full painting",
      art: "concepts",
      stages: [
        { title: "Brief and thumbnails", detail: "A short written brief, then a board of original thumbnails for six locations." },
        { title: "Value sketches", detail: "Tonal sketches for the chosen compositions, shared as a single dated file." },
        { title: "Colour paintings", detail: "Each concept is painted from the sketch. One of the six is screen-recorded in full." },
        { title: "The pack", detail: "Six finished concepts plus the process. None should appear, lightly altered, in a reverse image search." },
      ],
    },
    {
      id: "tiles",
      title: "Harbour tiles",
      price: "£45",
      category: "games",
      makerId: "rowan",
      commission: false,
      blurb:
        "A hand-drawn tile set for a small coastal town: quays, sheds, water, and streets. Source files and an editor recording are included, so you can see the tiles being drawn and placed, not generated as a pack.",
      proof: "Source drawings, editor recording, and a short dev log",
      art: "tiles",
      stages: [
        { title: "Style frames", detail: "A few frames drawn from scratch to set the line, the palette, and the scale." },
        { title: "Tile drawing", detail: "The tiles are drawn as source art, then sliced. The working folder is dated." },
        { title: "In the editor", detail: "A screen recording of the set being placed and adjusted in the map editor." },
        { title: "The pack", detail: "Exported tiles, source files, and a short log of what changed between versions." },
      ],
    },
    {
      id: "lowwater",
      title: "Low Water",
      price: "£7",
      category: "games",
      makerId: "rowan",
      commission: false,
      blurb:
        "A short game about walking a tidal river as the water drops. The code, the assets, and a dev log are on the listing, so you can see it was built by hand rather than assembled from generated parts.",
      proof: "Commit history, asset recordings, and a dev log",
      art: "game",
      stages: [
        { title: "Paper design", detail: "Notes and a first map, photographed before any engine work." },
        { title: "First playable", detail: "Commits from an empty project through to a walkable scene, with short notes on each burst of work." },
        { title: "Assets and systems", detail: "Recordings of the art being drawn, and commits for the tide timing and the dialogue." },
        { title: "Release build", detail: "The shipped build, the source, and the log. Nothing here is a generated asset pack with a new name." },
      ],
    },
    {
      id: "tideclock",
      title: "Tideclock",
      price: "£9",
      category: "code",
      makerId: "luca",
      commission: false,
      blurb:
        "A small local tool that shows the next high and low water for a UK harbour you choose. The listing includes the repository from the first commit, so you can read how it was written.",
      proof: "Commit history from the first file, plus a short dev log",
      art: "code",
      stages: [
        { title: "The problem", detail: "A short note on what the tool should do, written before any code." },
        { title: "First commits", detail: "The repository starts empty. Early commits show the data reading and the first display." },
        { title: "The work", detail: "A dev log of the tide math, the harbour list, and the mistakes that got torn out." },
        { title: "Tagged release", detail: "A tagged version, the source, and the history. A generated project dropped in as a finished tool would not pass." },
      ],
    },
    {
      id: "bowl",
      title: "Speckled stoneware bowl",
      price: "£48",
      category: "crafts",
      makerId: "priya",
      commission: false,
      blurb:
        "An everyday bowl in a speckled oat glaze, thrown on the wheel in Frome. The rim is slightly irregular, as it comes off the wheel. Crafts sit in a second category here; a 3D print from someone else’s file, or from an AI-generated file, would not be listed.",
      proof: "Throwing time-lapse and firing notes",
      art: "bowl",
      stages: [
        { title: "Clay prepared", detail: "A 1.2 kg ball of stoneware, wedged on the bench, photographed before it met the wheel." },
        { title: "Thrown on the wheel", detail: "The bowl is thrown in one sitting. A time-lapse covers the pull, the rim, and the first turning." },
        { title: "Bisque fired", detail: "Once leather-hard, it is turned, dried, and bisque fired. The speckled body already shows." },
        { title: "Glazed and finished", detail: "Dipped in an oat glaze and glaze-fired. The finished bowl is the one in this listing." },
      ],
    },
    {
      id: "board",
      title: "Oak serving board",
      price: "£72",
      category: "crafts",
      makerId: "tom",
      commission: false,
      blurb:
        "English oak, cut and finished in Hope Valley, with a shallow juice groove and an oiled surface that will darken with use.",
      proof: "Work-in-progress photos and a studio walkthrough",
      art: "board",
      stages: [
        { title: "Rough-sawn oak", detail: "A board of English oak, photographed in the rack before any shaping." },
        { title: "Shaped and grooved", detail: "The outline is cut, the juice groove is routed by hand, and the edges are eased." },
        { title: "Sanding", detail: "Worked through the grits on the bench. Tool marks are left on the underside." },
        { title: "Oiled and signed", detail: "Finished with food-safe oil. Tom signs the underside and films a short walkthrough of the workshop." },
      ],
    },
  ];

  const state = {
    stageIndex: 0,
    interestName: "",
    interestEmail: "",
    interestBrief: "",
    pledgeRead: false,
    interestSent: false,
    commissionSent: false,
    reportNote: false,
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function makerById(id) {
    return MAKERS.find(function (m) { return m.id === id; }) || MAKERS[0];
  }

  function listingById(id) {
    return LISTINGS.find(function (l) { return l.id === id; }) || LISTINGS[0];
  }

  function listingsForMaker(makerId) {
    return LISTINGS.filter(function (l) { return l.makerId === makerId; });
  }

  function listingsForCategory(cat) {
    if (cat === "all") return LISTINGS;
    return LISTINGS.filter(function (l) { return l.category === cat; });
  }

  function commissionListings() {
    return LISTINGS.filter(function (l) { return l.commission; });
  }

  function commissionMakers() {
    return MAKERS.filter(function (m) { return m.commissions; });
  }

  function parseRoute() {
    var raw = (location.hash || "#/").replace(/^#/, "");
    var parts = raw.split("/").filter(Boolean);
    var page = parts[0] || "home";
    if (page === "shop") {
      var cat = parts[1] && CAT_LABEL[parts[1]] ? parts[1] : "all";
      return { page: "shop", category: cat };
    }
    if (page === "listing" && parts[1]) return { page: "listing", id: parts[1] };
    if (page === "maker" && parts[1]) return { page: "maker", id: parts[1] };
    if (page === "how" || page === "join" || page === "pricing" || page === "commissions") return { page: page };
    return { page: "home" };
  }

  function go(hash) {
    var next = hash.charAt(0) === "#" ? hash : "#" + hash;
    if (location.hash === next) {
      render();
      return;
    }
    location.hash = next;
  }

  function badgeSvg(size) {
    size = size || 78;
    return (
      '<svg viewBox="0 0 100 100" width="' + size + '" height="' + size + '" role="img" aria-label="Certified Human-Made">' +
      '<circle cx="50" cy="50" r="47" fill="none" stroke="var(--stamp)" stroke-width="2.4" />' +
      '<circle cx="50" cy="50" r="41.5" fill="none" stroke="var(--stamp)" stroke-width="0.7" stroke-dasharray="1.8 2.2" />' +
      '<g transform="rotate(-7 50 50)">' +
      '<text x="50" y="40" text-anchor="middle" fill="var(--stamp)" font-size="8" letter-spacing="2.4">CERTIFIED</text>' +
      '<text x="50" y="56" text-anchor="middle" fill="var(--stamp)" font-size="9.5" font-weight="600" letter-spacing="0.4">HUMAN-MADE</text>' +
      '<path d="M28 64 Q50 70 72 64" fill="none" stroke="var(--stamp)" stroke-width="0.8" />' +
      "</g></svg>"
    );
  }

  function productArt(kind) {
    var arts = {
      ferry:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="86" y="46" width="228" height="208" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<circle cx="268" cy="88" r="14" fill="var(--sand)" stroke="var(--ink)" stroke-width="1.2" />' +
        '<path d="M100 170 C160 150 220 186 314 160" fill="none" stroke="var(--ink)" stroke-width="1.5" />' +
        '<path d="M118 200 C180 186 250 214 300 196" fill="none" stroke="var(--olive)" stroke-width="1.4" opacity="0.7" />' +
        '<path d="M168 168 L210 168 L222 152 L156 152 Z" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="1.5" opacity="0.85" />' +
        '<path d="M188 152 L188 128 L204 152" fill="var(--sand)" stroke="var(--ink)" stroke-width="1.2" /></svg>',
      portrait:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="110" y="40" width="180" height="220" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<ellipse cx="200" cy="128" rx="36" ry="42" fill="none" stroke="var(--ink)" stroke-width="1.8" />' +
        '<path d="M168 168 C168 210 232 210 232 168" fill="none" stroke="var(--ink)" stroke-width="1.6" />' +
        '<path d="M200 170 C200 170 186 186 200 196 C214 186 200 170 200 170" fill="none" stroke="var(--muted)" stroke-width="1.2" /></svg>',
      character:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<circle cx="200" cy="78" r="22" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M168 108 L232 108 L246 200 L154 200 Z" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="2" opacity="0.8" />' +
        '<path d="M176 200 L168 252" fill="none" stroke="var(--ink)" stroke-width="3" />' +
        '<path d="M224 200 L234 252" fill="none" stroke="var(--ink)" stroke-width="3" />' +
        '<rect x="236" y="124" width="28" height="36" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="1.4" />' +
        '<path d="M240 132 L260 132 M240 140 L256 140 M240 148 L252 148" stroke="var(--muted)" stroke-width="1" /></svg>',
      concepts:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="48" y="70" width="140" height="90" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M60 140 C90 120 120 148 176 128" fill="none" stroke="var(--olive)" stroke-width="1.5" />' +
        '<rect x="210" y="54" width="140" height="90" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M222 116 C250 96 280 124 338 108" fill="none" stroke="var(--ink)" stroke-width="1.5" />' +
        '<rect x="128" y="168" width="150" height="86" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<circle cx="250" cy="198" r="10" fill="var(--sand)" stroke="var(--ink)" stroke-width="1" /></svg>',
      tiles:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="95" y="45" width="70" height="70" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="165" y="45" width="70" height="70" fill="var(--olive)" opacity="0.45" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="235" y="45" width="70" height="70" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="95" y="115" width="70" height="70" fill="var(--olive)" opacity="0.45" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="165" y="115" width="70" height="70" fill="var(--terracotta)" opacity="0.55" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="235" y="115" width="70" height="70" fill="var(--olive)" opacity="0.45" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="95" y="185" width="70" height="70" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="165" y="185" width="70" height="70" fill="var(--olive)" opacity="0.45" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="235" y="185" width="70" height="70" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" /></svg>',
      game:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="70" y="50" width="260" height="200" rx="10" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<rect x="70" y="50" width="260" height="28" rx="10" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M90 200 C140 170 190 210 250 176 C290 158 314 168 314 168 L314 230 L90 230 Z" fill="var(--olive)" opacity="0.4" stroke="var(--ink)" stroke-width="1.4" />' +
        '<path d="M90 188 C150 166 200 198 314 160" fill="none" stroke="var(--ink)" stroke-width="1.4" /></svg>',
      code:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="70" y="50" width="260" height="200" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M110 90 L110 210" stroke="var(--line)" stroke-width="2" />' +
        '<circle cx="110" cy="90" r="7" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="1.4" />' +
        '<circle cx="110" cy="140" r="7" fill="var(--sand)" stroke="var(--ink)" stroke-width="1.4" />' +
        '<circle cx="110" cy="190" r="7" fill="var(--olive)" stroke="var(--ink)" stroke-width="1.4" />' +
        '<path d="M130 86 L300 86" stroke="var(--ink)" stroke-width="1.4" />' +
        '<path d="M130 136 L270 136" stroke="var(--muted)" stroke-width="1.4" />' +
        '<path d="M130 186 L250 186" stroke="var(--ink)" stroke-width="1.4" /></svg>',
      bowl:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<ellipse cx="200" cy="118" rx="108" ry="28" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M92 118 C96 210 150 236 200 238 C250 236 304 210 308 118" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="2" opacity="0.85" />' +
        '<ellipse cx="200" cy="118" rx="96" ry="22" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="1.5" />' +
        '<circle cx="156" cy="170" r="2.2" fill="var(--ink)" opacity="0.35" />' +
        '<circle cx="210" cy="188" r="1.8" fill="var(--ink)" opacity="0.3" />' +
        '<circle cx="248" cy="160" r="2" fill="var(--ink)" opacity="0.28" /></svg>',
      board:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="70" y="92" width="260" height="116" rx="22" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="2" opacity="0.8" />' +
        '<rect x="92" y="112" width="216" height="16" rx="8" fill="none" stroke="var(--ink)" stroke-width="1.4" opacity="0.55" />' +
        '<path d="M88 130 Q200 142 312 128" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.25" />' +
        '<path d="M90 160 Q210 150 310 162" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.2" /></svg>',
    };
    return arts[kind] || arts.ferry;
  }

  function listingCard(item) {
    var m = makerById(item.makerId);
    var extra = item.commission
      ? '<div class="takes-tag">Custom commission</div>'
      : "";
    return (
      '<button type="button" class="card" data-go="#/listing/' + item.id + '">' +
      '<div class="card-art">' + productArt(item.art) +
      '<div class="card-badge">' + badgeSvg(56) + "</div></div>" +
      '<div class="card-body">' +
      '<div class="sample-mark">Sample listing</div>' +
      '<div class="card-title">' + escapeHtml(item.title) + "</div>" +
      '<div class="card-meta">' + escapeHtml(m.name) + " · " + escapeHtml(CAT_LABEL[item.category]) + "</div>" +
      extra +
      '<div class="card-price">' + escapeHtml(item.price) + "</div>" +
      "</div></button>"
    );
  }

  function renderHome() {
    var featured = [listingById("ferry"), listingById("rook"), listingById("tiles"), listingById("tideclock")];
    return (
      '<div class="wrap hero">' +
      "<div>" +
      '<div class="eyebrow">Actual Intelligence</div>' +
      "<h1>Original, from composition to finished piece.</h1>" +
      '<p class="lead">A marketplace with an originality guarantee for digital art, games, and code. The work is truly the creator’s own: no AI generation, no painting over existing pictures, no elements of another artist’s work. You can follow every step, and a reverse image search should only find things that look similar, never the same.</p>' +
      '<div class="btn-row" style="margin-top:26px">' +
      '<button type="button" class="btn btn-primary" data-go="#/shop">Browse the shop</button>' +
      '<button type="button" class="btn btn-quiet" data-go="#/commissions">Commission a piece</button>' +
      "</div></div>" +
      '<div class="hero-badge">' + badgeSvg(160) + "</div>" +
      "</div>" +
      '<div class="band"><div class="wrap band-inner">' +
      '<div class="section-head"><h2>From the shop</h2>' +
      '<button type="button" class="link-btn" data-go="#/shop">See all sample listings</button></div>' +
      '<div class="grid">' + featured.map(listingCard).join("") + "</div>" +
      "</div></div>" +
      '<div class="wrap pad-tight">' +
      '<h2 style="margin:0 0 8px;font-size:22px">The originality guarantee</h2>' +
      '<p class="muted" style="margin:0 0 24px;max-width:680px;line-height:1.55">Buyers are not asked to take a creator’s word for it. Every listing carries a Certified Human-Made badge, backed by process proof, an originality check, a public pledge, and community reporting.</p>' +
      '<div class="grid-3">' +
      '<div class="pillar"><div class="pillar-title">Process proof</div><div class="pillar-detail">Every step is on the listing: thumbnails and layered files, time-lapse or screen recordings, sketch to final. For games and code, that means source assets, commit history, and a dev log.</div></div>' +
      '<div class="pillar"><div class="pillar-title">Originality checks</div><div class="pillar-detail">Visual work is reverse image searched before it goes live. The test of success is simple: you should only find things that look similar, never the same image with tweaks.</div></div>' +
      '<div class="pillar"><div class="pillar-title">Pledge and reports</div><div class="pillar-detail">Each creator pledges, in public, that the work is their own from composition to finish. If a listing looks generated, painted over, or taken from someone else, the community can flag it.</div></div>' +
      "</div>" +
      '<div class="btn-row" style="margin-top:28px">' +
      '<button type="button" class="btn btn-quiet" data-go="#/how">How certification works</button>' +
      "</div></div>" +
      '<div class="wrap pad-home-cta"><div class="maker-cta">' +
      '<div class="eyebrow-tight">Commissions</div>' +
      "<h2>Ask for a piece that does not already exist.</h2>" +
      '<p class="muted" style="margin:0 0 18px;max-width:620px;line-height:1.55">Custom work follows the same guarantee. You share a brief, the creator answers with original thumbnails, and you watch the piece being made. If you commissioned a pirate captain, you should not be able to Google the final image and find essentially the same character with a few tweaks.</p>' +
      '<div class="btn-row">' +
      '<button type="button" class="btn btn-primary" data-go="#/commissions">See how a commission works</button>' +
      "</div></div></div>" +
      '<div class="wrap secondary-band">' +
      '<h2 style="margin:0 0 8px;font-size:22px">Crafts, as a second category</h2>' +
      '<p class="muted" style="margin:0 0 18px;max-width:680px;line-height:1.55">Physical work is still welcome, with the same standard: it has to be the maker’s own. A 3D print from someone else’s file, or from an AI-generated file, does not count as your own work.</p>' +
      '<div class="grid">' + [listingById("bowl"), listingById("board")].map(listingCard).join("") + "</div>" +
      "</div>"
    );
  }

  function renderShop(category) {
    var list = listingsForCategory(category);
    var chips = FILTERS.map(function (f) {
      var href = f.id === "all" ? "#/shop" : "#/shop/" + f.id;
      return (
        '<button type="button" class="chip' + (category === f.id ? " is-on" : "") + '" data-go="' + href + '">' +
        escapeHtml(f.label) + "</button>"
      );
    }).join("");
    var note = "";
    if (category === "crafts") {
      note = '<p class="cat-note">Crafts are a second category in this preview. The same originality standard applies: the work has to be the maker’s own. A 3D print from someone else’s file, or from an AI-generated file, does not count.</p>';
    }
    return (
      '<div class="wrap page-block">' +
      "<h1>The shop</h1>" +
      '<p class="intro">Most of the sample work here is digital: illustration, character and concept art, game assets, indie games, and code. Crafts sit in a second category. Every listing has a Certified Human-Made badge and a process you can open.</p>' +
      '<div class="filters">' + chips + "</div>" +
      note +
      '<div class="count">' + list.length + " sample " + (list.length === 1 ? "listing" : "listings") + "</div>" +
      '<div class="grid">' + list.map(listingCard).join("") + "</div>" +
      "</div>"
    );
  }

  function renderListing(id) {
    var listing = listingById(id);
    var listingMaker = makerById(listing.makerId);
    if (state.stageIndex >= listing.stages.length) state.stageIndex = 0;
    var stage = listing.stages[state.stageIndex];
    var stageBtns = listing.stages.map(function (s, i) {
      return (
        '<button type="button" class="chip' + (i === state.stageIndex ? " is-on" : "") + '" data-stage="' + i + '">' +
        (i + 1) + ". " + escapeHtml(s.title) + "</button>"
      );
    }).join("");
    var commissionLink = listing.commission || listingMaker.commissions
      ? '<p class="muted" style="margin:10px 0 0;line-height:1.6">' +
        (listing.commission
          ? 'This is a sample commission listing. '
          : "This creator also takes commissions. ") +
        '<button type="button" class="link-btn" style="padding:0;min-height:auto" data-go="#/commissions">See how a commission works</button></p>'
      : "";
    return (
      '<div class="wrap pad-listing listing">' +
      '<button type="button" class="link-btn" data-go="#/shop">Back to the shop</button>' +
      '<div class="listing-grid">' +
      '<div class="art-frame">' + productArt(listing.art) + "</div>" +
      "<div>" +
      '<div class="sample-mark">Sample listing' + (listing.commission ? " · custom commission" : "") + "</div>" +
      "<h1>" + escapeHtml(listing.title) + "</h1>" +
      '<div class="listing-price-row"><div class="price-lg">' + escapeHtml(listing.price) + "</div>" + badgeSvg(58) + "</div>" +
      '<div class="muted" style="margin-top:12px">' +
      escapeHtml(CAT_LABEL[listing.category]) + " · " +
      '<button type="button" class="link-btn" style="padding:0;min-height:auto" data-go="#/maker/' + listing.makerId + '">' +
      escapeHtml(listingMaker.name) + ", " + escapeHtml(listingMaker.craftLabel.toLowerCase()) + "</button>" +
      " · " + escapeHtml(listingMaker.place) +
      "</div>" +
      '<p style="line-height:1.6;margin:16px 0 0">' + escapeHtml(listing.blurb) + "</p>" +
      '<p class="muted" style="line-height:1.6;margin:10px 0 0">Proof on this listing: ' + escapeHtml(listing.proof) +
      ". If a piece failed the originality standard, the buyer would be refunded and the seller would lose the badge.</p>" +
      commissionLink +
      '<div class="eyebrow-tight" style="margin-top:22px">See the process</div>' +
      '<div class="stages">' + stageBtns + "</div>" +
      '<div class="stage-copy"><div style="font-size:16px;margin-bottom:6px">Stage ' +
      (state.stageIndex + 1) + " of " + listing.stages.length + ": " + escapeHtml(stage.title) +
      '</div><div class="muted" style="line-height:1.55">' + escapeHtml(stage.detail) + "</div></div>" +
      '<div style="margin-top:22px">' +
      '<button type="button" class="btn btn-quiet" id="report-btn">Report this listing</button>' +
      (state.reportNote
        ? '<p class="muted" style="margin:12px 0 0;line-height:1.55">In a live shop, this would start a community report for review, including an originality check. Nothing is sent from this preview.</p>'
        : "") +
      "</div></div></div></div>"
    );
  }

  function renderMaker(id) {
    var maker = makerById(id);
    var theirWork = listingsForMaker(maker.id);
    return (
      '<div class="wrap pad-listing">' +
      '<button type="button" class="link-btn" data-go="#/shop">Back to the shop</button>' +
      '<div class="maker-head">' + badgeSvg(88) +
      '<div style="flex:1 1 260px">' +
      '<div class="sample-mark">Example maker</div>' +
      "<h1>" + escapeHtml(maker.name) + "</h1>" +
      '<div class="muted">' + escapeHtml(maker.craftLabel) + " · " + escapeHtml(maker.place) + "</div>" +
      (maker.commissions ? '<div class="takes-tag">Takes commissions</div>' : "") +
      '<p style="line-height:1.6;max-width:640px">' + escapeHtml(maker.bio) + "</p>" +
      (maker.commissions
        ? '<button type="button" class="btn btn-primary" data-go="#/commissions">Request a commission</button>'
        : "") +
      "</div></div>" +
      '<div class="pledge-block">' +
      '<div class="eyebrow-tight">The maker pledge</div>' +
      '<p class="pledge-quote">“' + escapeHtml(PLEDGE) + '”</p>' +
      '<div class="faint" style="font-size:14px">— ' + escapeHtml(maker.name) + ", signed in public for this preview</div>" +
      "</div>" +
      '<h2 style="margin:32px 0 16px;font-size:22px">Work by ' + escapeHtml(maker.name) + "</h2>" +
      '<div class="grid">' + theirWork.map(listingCard).join("") + "</div>" +
      "</div>"
    );
  }

  function renderHow() {
    var disciplines = [
      { title: "Digital art", detail: "Layered or stage-by-stage files, from thumbnail to final, plus a time-lapse or screen recording. The composition starts on a blank canvas, not on someone else’s picture, and not as a paint-over." },
      { title: "Games and assets", detail: "Source assets, editor or engine recordings, and a dev log or build notes that show the work being made. A generated pack with a new name does not pass." },
      { title: "Code and tools", detail: "A commit history from the early files, plus short dev notes. A generated dump, or a copied repository presented as new work, does not pass." },
      { title: "Crafts", detail: "Work-in-progress photos and making videos, as a second category. A 3D print from someone else’s file, or from an AI-generated file, does not count as your own work." },
    ];
    var proofs = [
      { title: "Process, start to finish", detail: "Dated stages the buyer can open: sketches, layers, recordings, commits, or making photos, not only the finished file." },
      { title: "Reverse image search", detail: "For visual work, the finished image is searched before the listing goes live. The test of success: only similar work should appear, never the same image with tweaks." },
      { title: "The maker pledge", detail: "A public promise that the work is the creator’s own from composition to finished product, with no AI generation and no borrowed elements." },
      { title: "Community reporting", detail: "Buyers and other makers can flag a listing that looks generated, painted over, or taken from someone else. It then goes back for review." },
    ];
    return (
      '<div class="wrap page-block">' +
      "<h1>How certification works</h1>" +
      '<p class="intro">The Certified Human-Made badge is not a logo a creator can simply add. It is an originality guarantee: the work is truly their own, from the first composition to the finished piece, and it can be lost if that standard is broken.</p>' +
      '<h2 style="margin:0 0 14px;font-size:20px">Process proof, by discipline</h2>' +
      '<div class="grid-3" style="margin-bottom:32px">' +
      disciplines.map(function (row) {
        return '<div class="proof-item"><div style="margin-bottom:6px">' + escapeHtml(row.title) +
          '</div><div class="proof-detail">' + escapeHtml(row.detail) + "</div></div>";
      }).join("") +
      "</div>" +
      '<h2 style="margin:0 0 14px;font-size:20px">The originality check</h2>' +
      '<p class="intro">Before visual work goes live, the finished image is reverse image searched. A buyer should be able to do the same and find only things that look similar, never the same piece with tweaks. If you commissioned a pirate captain, you should not be able to Google the final image and find essentially the same character, lightly altered.</p>' +
      '<h2 style="margin:0 0 14px;font-size:20px">For buyers</h2>' +
      '<ol class="steps">' +
      "<li><strong>Browse certified work, or start a commission.</strong> Every listing carries the badge. If it is here, a person made it, and it should be original to them.</li>" +
      "<li><strong>Check the proof.</strong> Open the stages, the recordings, the files, or the commit history before you buy.</li>" +
      "<li><strong>Buy with a guarantee.</strong> If a piece fails the originality standard, you get your money back and the seller loses the badge.</li>" +
      "</ol>" +
      '<h2 style="margin:0 0 14px;font-size:20px">For creators</h2>' +
      '<ol class="steps">' +
      "<li><strong>Take the pledge.</strong> You agree, in public, that the work is yours from composition to finish, with no AI generation and no borrowed elements.</li>" +
      "<li><strong>Show every step.</strong> Upload the process that fits your discipline: stages and recordings for art, source and logs for games and code, making photos for crafts.</li>" +
      "<li><strong>Earn the badge.</strong> Once the proof and the originality check hold up, your shop and listings show Certified Human-Made, and you can sell or take commissions.</li>" +
      "</ol>" +
      '<h2 style="margin:0 0 14px;font-size:20px">What sits on a listing</h2>' +
      '<div class="grid-3">' +
      proofs.map(function (row) {
        return '<div class="proof-item"><div style="margin-bottom:6px">' + escapeHtml(row.title) +
          '</div><div class="proof-detail">' + escapeHtml(row.detail) + "</div></div>";
      }).join("") +
      "</div>" +
      '<div class="btn-row" style="margin-top:32px">' +
      '<button type="button" class="btn btn-primary" data-go="#/shop">Browse sample listings</button>' +
      '<button type="button" class="btn btn-quiet" data-go="#/commissions">See commissions</button>' +
      "</div></div>"
    );
  }

  function renderCommissions() {
    var makers = commissionMakers();
    var samples = commissionListings();
    var canSend = state.interestName.trim() && state.interestEmail.trim() && state.interestBrief.trim();
    var makerBits = makers.map(function (m) {
      return (
        '<div class="proof-item">' +
        '<div class="sample-mark">Example maker</div>' +
        '<div style="margin:6px 0 4px;font-size:17px">' +
        '<button type="button" class="link-btn" style="padding:0;min-height:auto;font-size:17px" data-go="#/maker/' + m.id + '">' +
        escapeHtml(m.name) + "</button></div>" +
        '<div class="muted">' + escapeHtml(m.craftLabel) + " · " + escapeHtml(m.place) + "</div>" +
        '<div class="proof-detail" style="margin-top:8px">' + escapeHtml(m.bio) + "</div></div>"
      );
    }).join("");
    return (
      '<div class="wrap page-block">' +
      "<h1>Commissions</h1>" +
      '<p class="intro">Custom work is a first-class part of the shop, not an afterthought. You ask for a piece that does not already exist, and the same originality guarantee applies from the first thumbnail to the file you receive.</p>' +
      '<h2 style="margin:0 0 14px;font-size:20px">How a commission works</h2>' +
      '<ol class="steps">' +
      "<li><strong>Share a brief.</strong> Tell the creator what you want made. You can send reference for likeness or mood, but the composition has to start with them, not as a paint-over of an existing picture.</li>" +
      "<li><strong>Review original thumbnails.</strong> The first reply is a set of sketches invented for your brief, so you can see the idea beginning.</li>" +
      "<li><strong>Follow every step.</strong> As the work develops, you get staged files, a recording or time-lapse, and a chance to steer the brief without skipping the process.</li>" +
      "<li><strong>Receive the piece and the proof.</strong> The finished work arrives with the process attached. A reverse image search should only find similar work, never the same image with tweaks.</li>" +
      "</ol>" +
      '<div class="example-box">' +
      '<div class="eyebrow-tight">A test of success</div>' +
      "<p>If you commission a pirate captain, you should not be able to Google the finished image and find essentially the same character with a few tweaks. Similar work can exist. The same work, traced, painted over, or lightly altered, cannot.</p>" +
      "</div>" +
      '<h2 style="margin:0 0 14px;font-size:20px">Sample commission listings</h2>' +
      '<p class="cat-note">These are example offers, not live bookings.</p>' +
      '<div class="grid">' + samples.map(listingCard).join("") + "</div>" +
      '<h2 style="margin:32px 0 14px;font-size:20px">Creators who take custom work</h2>' +
      '<div class="grid-3">' + makerBits + "</div>" +
      '<div class="interest" style="max-width:520px">' +
      '<h2 style="margin:0 0 6px;font-size:20px">Request a sample commission</h2>' +
      '<p class="muted" style="margin:0 0 16px;line-height:1.55">Preview only: nothing is sent, and no payment is taken. Use this to see how a brief would be started.</p>' +
      '<label class="field-label" for="comm-name">Name</label>' +
      '<input id="comm-name" type="text" autocomplete="name" placeholder="Your name" value="' + escapeHtml(state.interestName) + '">' +
      '<label class="field-label" for="comm-email">Email</label>' +
      '<input id="comm-email" type="email" autocomplete="email" placeholder="you@example.com" value="' + escapeHtml(state.interestEmail) + '">' +
      '<label class="field-label" for="comm-brief">A short brief</label>' +
      '<input id="comm-brief" type="text" placeholder="For example: an original pirate captain, not based on an existing design" value="' + escapeHtml(state.interestBrief) + '">' +
      '<button type="button" class="btn btn-primary" id="commission-btn"' + (canSend ? "" : " disabled") + ">Send a sample request</button>" +
      (state.commissionSent
        ? "<p style=\"margin:16px 0 0;line-height:1.55\">Thank you, " + escapeHtml(state.interestName.trim()) +
          ". This is a preview, so nothing was sent. In a live site, your brief would go to the creator and the first step would be original thumbnails, not a paint-over.</p>"
        : "") +
      "</div></div>"
    );
  }

  function renderJoin() {
    var canSubmit = state.interestName.trim() && state.interestEmail.trim() && state.pledgeRead;
    return (
      '<div class="wrap page-block">' +
      "<h1>Become a certified maker</h1>" +
      '<p class="intro">This is a preview of the onboarding flow, not a live application. You can leave a name and email to see how interest would be registered; nothing is stored or sent.</p>' +
      '<h2 style="margin:0 0 14px;font-size:20px">The path to the badge</h2>' +
      '<ol class="steps">' +
      "<li><strong>Take the pledge.</strong> You agree, in public, that your work is your own from composition to finish: no generative AI, no painting over an existing picture, and no elements of another person’s work presented as yours.</li>" +
      "<li><strong>Show every step.</strong> Upload the process that fits your discipline — stages and recordings for art, source and commit history for games and code, making photos for crafts.</li>" +
      "<li><strong>Pass the originality check.</strong> Visual work is reverse image searched. If the proof is thin, you will be asked for more before a listing or a commission profile can go live.</li>" +
      "<li><strong>Earn the badge and start selling.</strong> The badge sits on your shop, your listings, and your commission offers. A yearly verification fee keeps the review going; sales and custom work then take a commission.</li>" +
      "</ol>" +
      '<div class="pledge-box"><div class="eyebrow-tight">The maker pledge</div>' +
      '<p class="pledge-quote">“' + escapeHtml(PLEDGE) + '”</p></div>' +
      '<div class="interest">' +
      '<h2 style="margin:0 0 6px;font-size:20px">Register your interest</h2>' +
      '<p class="muted" style="margin:0 0 16px;line-height:1.55">Preview only: no account is created, and no payment is taken.</p>' +
      '<label class="field-label" for="maker-name">Name</label>' +
      '<input id="maker-name" type="text" autocomplete="name" placeholder="Your name" value="' + escapeHtml(state.interestName) + '">' +
      '<label class="field-label" for="maker-email">Email</label>' +
      '<input id="maker-email" type="email" autocomplete="email" placeholder="you@example.com" value="' + escapeHtml(state.interestEmail) + '">' +
      '<label class="check-label"><input id="pledge-read" type="checkbox"' + (state.pledgeRead ? " checked" : "") + ">" +
      "<span>I have read the maker pledge. In a live site, signing it would be a public part of my profile.</span></label>" +
      '<button type="button" class="btn btn-primary" id="interest-btn"' + (canSubmit ? "" : " disabled") + ">Register interest</button>" +
      (state.interestSent
        ? "<p style=\"margin:16px 0 0;line-height:1.55\">Thank you, " + escapeHtml(state.interestName.trim()) +
          ". This is a preview, so nothing was sent. In a live site, we would use this to start your certification.</p>"
        : "") +
      "</div>" +
      '<div style="margin-top:28px"><button type="button" class="link-btn" data-go="#/pricing">See the starting prices for makers</button></div>' +
      "</div>"
    );
  }

  function renderPricing() {
    var tiers = [
      {
        name: "Sale commission",
        amount: "8%",
        who: "The creator, on each shop sale or completed commission",
        detail: "A cut of the listed price, or of the custom fee, in line with other marketplaces. This is a starting figure to argue over, not a set rate.",
      },
      {
        name: "Verification fee",
        amount: "£29 a year",
        who: "The creator, yearly",
        detail: "Pays for the review that unlocks the badge, including process review and, for visual work, a reverse image search, plus the yearly check that keeps it.",
      },
      {
        name: "Premium badge",
        amount: "£79 a year",
        who: "The creator, optional",
        detail: "Higher listing placement, a fuller process page, and a featured place in the commission directory.",
      },
    ];
    return (
      '<div class="wrap page-block">' +
      "<h1>Maker pricing</h1>" +
      '<p class="intro" style="margin-bottom:8px">Buyers pay the listed price, or the agreed commission fee. The platform’s income comes from creators who want access to people paying for proven original work.</p>' +
      '<p class="faint" style="margin:0 0 28px;font-size:14px">Starting ideas for this preview, not a decision. UK VAT may apply later.</p>' +
      '<div class="grid-3">' +
      tiers.map(function (tier) {
        return (
          '<div class="price-card"><div class="eyebrow-tight">' + escapeHtml(tier.name) + "</div>" +
          '<div class="price-amount">' + escapeHtml(tier.amount) + "</div>" +
          "<div style=\"margin-bottom:10px\">" + escapeHtml(tier.who) + "</div>" +
          '<div class="proof-detail">' + escapeHtml(tier.detail) + "</div></div>"
        );
      }).join("") +
      "</div>" +
      '<div class="btn-row" style="margin-top:32px">' +
      '<button type="button" class="btn btn-primary" data-go="#/join">Become a certified maker</button>' +
      '<button type="button" class="btn btn-quiet" data-go="#/shop">Browse the shop</button>' +
      "</div></div>"
    );
  }

  function navActive(route, name) {
    if (name === "shop") return route.page === "shop" || route.page === "listing" || route.page === "maker";
    return route.page === name;
  }

  function render() {
    var route = parseRoute();
    var titles = {
      home: "Actual Intelligence — temporary preview",
      shop: "The shop — Actual Intelligence",
      listing: "Sample listing — Actual Intelligence",
      maker: "Example maker — Actual Intelligence",
      how: "How certification works — Actual Intelligence",
      commissions: "Commissions — Actual Intelligence",
      join: "Become a certified maker — Actual Intelligence",
      pricing: "Maker pricing — Actual Intelligence",
    };
    if (route.page === "listing") titles.listing = listingById(route.id).title + " — Actual Intelligence";
    if (route.page === "maker") titles.maker = makerById(route.id).name + " — Actual Intelligence";
    document.title = titles[route.page] || titles.home;

    var body = "";
    if (route.page === "home") body = renderHome();
    else if (route.page === "shop") body = renderShop(route.category);
    else if (route.page === "listing") body = renderListing(route.id);
    else if (route.page === "maker") body = renderMaker(route.id);
    else if (route.page === "how") body = renderHow();
    else if (route.page === "commissions") body = renderCommissions();
    else if (route.page === "join") body = renderJoin();
    else body = renderPricing();

    document.getElementById("root").innerHTML =
      '<div class="banner">Temporary preview for Kage and co-founders. Sample listings and makers are example data, not a live shop. Product pictures are simple drawings, not photographs of real work.</div>' +
      '<header class="site-header"><div class="wrap header-inner">' +
      '<button type="button" class="brand" data-go="#/">Actual Intelligence</button>' +
      "<nav>" +
      '<button type="button" class="link-btn' + (navActive(route, "shop") ? " is-active" : "") + '" data-go="#/shop">Shop</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "commissions") ? " is-active" : "") + '" data-go="#/commissions">Commissions</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "how") ? " is-active" : "") + '" data-go="#/how">How it works</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "pricing") ? " is-active" : "") + '" data-go="#/pricing">Pricing</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "join") ? " is-active" : "") + '" data-go="#/join">Become a maker</button>' +
      "</nav></div></header>" +
      "<main>" + body + "</main>" +
      '<footer class="site-footer"><div class="wrap footer-inner">Actual Intelligence is a working name for Project Y. This site is a temporary preview so Kage and co-founders can feel how the shop might look and work, with an originality guarantee for digital art, games, and code. It is not a live company, and nothing here can be bought. Made by Grok Bot on 25 November 2026.</div></footer>';

    if (route.page === "join") bindJoin();
    if (route.page === "commissions") bindCommission();
  }

  function bindJoin() {
    var name = document.getElementById("maker-name");
    var email = document.getElementById("maker-email");
    var pledge = document.getElementById("pledge-read");
    var btn = document.getElementById("interest-btn");
    function sync() {
      state.interestName = name.value;
      state.interestEmail = email.value;
      state.pledgeRead = pledge.checked;
      btn.disabled = !(state.interestName.trim() && state.interestEmail.trim() && state.pledgeRead);
    }
    name.addEventListener("input", function () { state.interestSent = false; sync(); });
    email.addEventListener("input", function () { state.interestSent = false; sync(); });
    pledge.addEventListener("change", function () { state.interestSent = false; sync(); });
    function submit() {
      sync();
      if (!state.interestName.trim() || !state.interestEmail.trim() || !state.pledgeRead) return;
      state.interestSent = true;
      render();
    }
    btn.addEventListener("click", submit);
    name.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    email.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
  }

  function bindCommission() {
    var name = document.getElementById("comm-name");
    var email = document.getElementById("comm-email");
    var brief = document.getElementById("comm-brief");
    var btn = document.getElementById("commission-btn");
    function sync() {
      state.interestName = name.value;
      state.interestEmail = email.value;
      state.interestBrief = brief.value;
      btn.disabled = !(state.interestName.trim() && state.interestEmail.trim() && state.interestBrief.trim());
    }
    name.addEventListener("input", function () { state.commissionSent = false; sync(); });
    email.addEventListener("input", function () { state.commissionSent = false; sync(); });
    brief.addEventListener("input", function () { state.commissionSent = false; sync(); });
    function submit() {
      sync();
      if (!state.interestName.trim() || !state.interestEmail.trim() || !state.interestBrief.trim()) return;
      state.commissionSent = true;
      render();
    }
    btn.addEventListener("click", submit);
    [name, email, brief].forEach(function (el) {
      el.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    });
  }

  document.addEventListener("click", function (e) {
    var goEl = e.target.closest("[data-go]");
    if (goEl) {
      e.preventDefault();
      var hash = goEl.getAttribute("data-go");
      if (hash.indexOf("#/listing/") === 0) {
        state.stageIndex = 0;
        state.reportNote = false;
      }
      go(hash);
      window.scrollTo(0, 0);
      return;
    }
    var stageEl = e.target.closest("[data-stage]");
    if (stageEl) {
      state.stageIndex = Number(stageEl.getAttribute("data-stage"));
      render();
      return;
    }
    if (e.target.id === "report-btn" || e.target.closest("#report-btn")) {
      state.reportNote = true;
      render();
    }
  });

  window.addEventListener("hashchange", function () {
    var route = parseRoute();
    if (route.page === "listing") {
      state.stageIndex = 0;
      state.reportNote = false;
    }
    render();
    window.scrollTo(0, 0);
  });

  if (!location.hash || location.hash === "#") {
    history.replaceState(null, "", "#/");
  }
  render();
})();
