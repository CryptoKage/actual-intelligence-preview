(function () {
  "use strict";

  const CRAFT_FILTERS = [
    { id: "all", label: "All crafts" },
    { id: "pottery", label: "Pottery" },
    { id: "woodwork", label: "Woodwork" },
    { id: "textiles", label: "Textiles" },
    { id: "jewellery", label: "Jewellery" },
    { id: "illustration", label: "Illustration" },
    { id: "printmaking", label: "Printmaking" },
  ];

  const CRAFT_LABEL = {
    pottery: "Pottery",
    woodwork: "Woodwork",
    textiles: "Textiles",
    jewellery: "Jewellery",
    illustration: "Illustration",
    printmaking: "Printmaking",
  };

  const PLEDGE =
    "I made this work with my own hands and tools. I did not use generative AI to design, produce, or finish it. If that ever changes, I will take the listing down.";

  const MAKERS = [
    {
      id: "priya",
      name: "Priya Chand",
      craftLabel: "Potter",
      place: "Frome, Somerset",
      bio: "Priya throws functional ware in a small garden studio in Frome. She works in stoneware, mostly in quiet glazes, and films every throwing session for the listing.",
    },
    {
      id: "tom",
      name: "Tom Brennan",
      craftLabel: "Woodworker",
      place: "Hope Valley, Derbyshire",
      bio: "Tom makes boards, stools and small furniture from native hardwoods in a workshop in Hope Valley. He leaves the tool marks in, and photographs each piece as it comes off the bench.",
    },
    {
      id: "helen",
      name: "Helen MacLeod",
      craftLabel: "Weaver",
      place: "Galashiels, Scottish Borders",
      bio: "Helen weaves scarves and household cloth on a floor loom, often from undyed or plant-dyed yarn. Loom video and fibre notes go up with every piece.",
    },
    {
      id: "jonas",
      name: "Jonas Weber",
      craftLabel: "Printmaker",
      place: "Bristol",
      bio: "Jonas cuts lino and sets type in a shared press room in Bristol. Each edition is small, and every print is pulled by hand, so the inking shifts a little from print to print.",
    },
    {
      id: "aisha",
      name: "Aisha Rahman",
      craftLabel: "Jeweller",
      place: "Birmingham Jewellery Quarter",
      bio: "Aisha works in recycled silver and copper at the bench, forging, hammering and enamelling one piece at a time. A bench time-lapse sits on each listing.",
    },
    {
      id: "mae",
      name: "Mae Okonkwo",
      craftLabel: "Illustrator",
      place: "Leeds",
      bio: "Mae draws and paints from life: river banks, allotment bunches, pages from a sketchbook. She posts the stages, not only the finished sheet.",
    },
  ];

  const LISTINGS = [
    {
      id: "bowl",
      title: "Speckled stoneware bowl",
      price: "£48",
      craft: "pottery",
      makerId: "priya",
      blurb:
        "An everyday bowl in a speckled oat glaze, thrown on the wheel in Frome. The rim is slightly irregular, as it comes off the wheel.",
      proof: "Throwing time-lapse and firing notes",
      art: "bowl",
      stages: [
        { title: "Clay prepared", detail: "A 1.2 kg ball of stoneware, wedged on the bench, photographed before it met the wheel." },
        { title: "Thrown on the wheel", detail: "The bowl is thrown in one sitting. A time-lapse covers the pull, the rim, and the first turning." },
        { title: "Bisque fired", detail: "Once leather-hard, it is turned, dried, and bisque fired. The speckled body already shows." },
        { title: "Glazed and finished", detail: "Dipped in an oat glaze and glaze-fired. The finished bowl is the one in this listing, not a retouched stand-in." },
      ],
    },
    {
      id: "board",
      title: "Oak serving board",
      price: "£72",
      craft: "woodwork",
      makerId: "tom",
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
    {
      id: "scarf",
      title: "Undyed merino scarf",
      price: "£95",
      craft: "textiles",
      makerId: "helen",
      blurb:
        "Woven on a floor loom from undyed merino, in a loose herringbone. Soft, warm, and a little uneven at the ends, as hand-finishing is.",
      proof: "Loom video and fibre notes",
      art: "scarf",
      stages: [
        { title: "Yarn chosen", detail: "Undyed merino, with notes on the flock and the count, before it is wound onto bobbins." },
        { title: "Warping the loom", detail: "The warp is measured, beamed, and threaded. This is the slow part, and it is filmed." },
        { title: "Weaving", detail: "A time-lapse of the herringbone coming up on the loom, pick by pick." },
        { title: "Washed and fringed", detail: "Taken off the loom, washed, and hand-fringed. The finished length is the one listed." },
      ],
    },
    {
      id: "print",
      title: "Hand-pulled lino print",
      price: "£36",
      craft: "printmaking",
      makerId: "jonas",
      blurb:
        "A limited edition of 25. Each print is pulled by hand on a nipping press in Bristol, so the inking varies a little from print to print.",
      proof: "Press video and edition sheet",
      art: "print",
      stages: [
        { title: "Drawing on the block", detail: "The design is drawn in reverse on the lino, then photographed before any cutting." },
        { title: "Cutting", detail: "The block is cut by hand over two evenings. Offcuts and the tool roll are in the shots." },
        { title: "First proof", detail: "A working proof is pulled to check the cut, then the block is adjusted." },
        { title: "The edition", detail: "Twenty-five prints are pulled, numbered, and signed. The edition sheet is on the listing." },
      ],
    },
    {
      id: "ring",
      title: "Hammered silver signet",
      price: "£145",
      craft: "jewellery",
      makerId: "aisha",
      blurb:
        "A round signet in recycled sterling silver, forged and hammered at the bench in Birmingham’s Jewellery Quarter.",
      proof: "Bench time-lapse and wax-carve photos",
      art: "ring",
      stages: [
        { title: "Wax model", detail: "The signet is first carved in wax. Photos show the face and the shank before casting." },
        { title: "Cast in silver", detail: "Cast from recycled sterling. The raw casting is photographed next to the wax." },
        { title: "Forged and hammered", detail: "A bench time-lapse covers the forging, the hammered face, and the first polish." },
        { title: "Fitted and finished", detail: "Sized, hallmarked, and given a quiet polish that leaves the hammer marks in." },
      ],
    },
    {
      id: "ink",
      title: "The Thames at low tide",
      price: "£62",
      craft: "illustration",
      makerId: "mae",
      blurb:
        "An ink drawing on heavy paper, built up in layers from sketches made on the bank, not from a generated reference.",
      proof: "Sketchbook pages and ink stages",
      art: "ink",
      stages: [
        { title: "On the bank", detail: "Pencil sketches made at low tide, with the date and the place written in the margin." },
        { title: "First ink pass", detail: "The main lines are laid in on heavy paper, still loose, and photographed wet." },
        { title: "Washes and marks", detail: "Layers of wash go in over two days. Each stage is shot in the same light." },
        { title: "Finished sheet", detail: "The drawing is signed and photographed flat, alongside the sketchbook pages." },
      ],
    },
    {
      id: "stool",
      title: "Ash stool",
      price: "£220",
      craft: "woodwork",
      makerId: "tom",
      blurb:
        "A three-legged stool in native ash, with a scooped seat and wedged tenons you can see from the top.",
      proof: "Making photos from log to finish",
      art: "stool",
      stages: [
        { title: "The timber", detail: "Ash from a local windfall, photographed in the yard before milling." },
        { title: "Seat and legs", detail: "The seat is scooped, the legs are turned, and the joints are cut on the bench." },
        { title: "Dry fit", detail: "A dry assembly, before glue, so the angles and the wedges can be checked." },
        { title: "Finished", detail: "Glued, wedged, and oiled. The wedges remain visible in the seat." },
      ],
    },
    {
      id: "mugs",
      title: "Breakfast mugs, set of four",
      price: "£86",
      craft: "pottery",
      makerId: "priya",
      blurb:
        "Four thrown mugs in a quiet grey-green glaze, each a slightly different weight in the hand, as a thrown set is.",
      proof: "Throwing time-lapse of the full set",
      art: "mugs",
      stages: [
        { title: "Four balls of clay", detail: "Each mug starts as a weighed ball, so the set stays close in size without being identical." },
        { title: "Thrown in one session", detail: "All four are thrown in a single sitting, filmed from the wheel." },
        { title: "Handles", detail: "Pulled handles are attached the next day, still soft, and photographed on the ware board." },
        { title: "Glazed as a set", detail: "Dipped in a grey-green glaze and fired together. Sold only as the set you see." },
      ],
    },
    {
      id: "towel",
      title: "Plant-dyed linen tea towel",
      price: "£28",
      craft: "textiles",
      makerId: "helen",
      blurb:
        "Linen yarn dyed with weld and onion skin, then woven in a plain stripe. It will soften and fade a little with washing.",
      proof: "Dye notes and loom video",
      art: "towel",
      stages: [
        { title: "The dyepot", detail: "Weld and onion skin, with notes on the recipe and the date of the pot." },
        { title: "Yarn drying", detail: "The dyed linen is rinsed and hung, then wound for the loom." },
        { title: "On the loom", detail: "A short video of the stripe being woven, including the hem heading." },
        { title: "Finished cloth", detail: "Cut, hemmed by hand, and washed once before it is listed." },
      ],
    },
    {
      id: "pendant",
      title: "Copper and enamel pendant",
      price: "£68",
      craft: "jewellery",
      makerId: "aisha",
      blurb:
        "A small copper disc, enamelled in a deep oxide green and hung on a hand-forged chain.",
      proof: "Firing photos and bench time-lapse",
      art: "pendant",
      stages: [
        { title: "The disc", detail: "A copper disc is cut, formed, and cleaned, then photographed before any enamel goes on." },
        { title: "First enamel coat", detail: "The first layer of oxide green is laid and fired. The colour is still thin." },
        { title: "Further firings", detail: "Two more coats are fired. Each stage is shot on the same trivet." },
        { title: "Chain and bail", detail: "A hand-forged chain and bail are made and fitted. The finished pendant is the one listed." },
      ],
    },
    {
      id: "cards",
      title: "Letterpress card set",
      price: "£18",
      craft: "printmaking",
      makerId: "jonas",
      blurb:
        "A set of six folded cards, printed from hand-set type and a small linocut, with matching envelopes.",
      proof: "Type-setting photos and press video",
      art: "cards",
      stages: [
        { title: "Type and block", detail: "The type is set by hand, and a small linocut is cut for the face of the card." },
        { title: "A first proof", detail: "A proof is pulled to check the lock-up and the impression." },
        { title: "The run", detail: "The cards are printed on the press, filmed as the edition comes off." },
        { title: "Folded and packed", detail: "Scored, folded, and packed as a set of six with envelopes." },
      ],
    },
    {
      id: "flowers",
      title: "Allotment flowers",
      price: "£54",
      craft: "illustration",
      makerId: "mae",
      blurb:
        "A watercolour study of late-summer flowers, painted from a bunch on the table, not from a photograph.",
      proof: "Table setup and painting stages",
      art: "flowers",
      stages: [
        { title: "The bunch", detail: "Flowers from the allotment, arranged on the table and photographed before any paint goes down." },
        { title: "Pencil and first wash", detail: "A light drawing, then the first wet washes, photographed while still drying." },
        { title: "Colour built up", detail: "Further passes over two sittings. Each sitting is dated." },
        { title: "Finished study", detail: "Signed, and photographed next to the original bunch." },
      ],
    },
  ];

  const state = {
    stageIndex: 0,
    interestName: "",
    interestEmail: "",
    pledgeRead: false,
    interestSent: false,
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

  function listingsForCraft(craft) {
    if (craft === "all") return LISTINGS;
    return LISTINGS.filter(function (l) { return l.craft === craft; });
  }

  function parseRoute() {
    var raw = (location.hash || "#/").replace(/^#/, "");
    var parts = raw.split("/").filter(Boolean);
    var page = parts[0] || "home";
    if (page === "shop") {
      var craft = parts[1] && CRAFT_LABEL[parts[1]] ? parts[1] : "all";
      return { page: "shop", craft: craft };
    }
    if (page === "listing" && parts[1]) return { page: "listing", id: parts[1] };
    if (page === "maker" && parts[1]) return { page: "maker", id: parts[1] };
    if (page === "how" || page === "join" || page === "pricing") return { page: page };
    return { page: "home" };
  }

  function go(hash, options) {
    var next = hash.charAt(0) === "#" ? hash : "#" + hash;
    if (location.hash === next) {
      render();
      return;
    }
    if (options && options.replace) {
      history.replaceState(null, "", next);
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
      bowl:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<ellipse cx="200" cy="118" rx="108" ry="28" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M92 118 C96 210 150 236 200 238 C250 236 304 210 308 118" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="2" opacity="0.85" />' +
        '<ellipse cx="200" cy="118" rx="96" ry="22" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="1.5" />' +
        '<circle cx="156" cy="170" r="2.2" fill="var(--ink)" opacity="0.35" />' +
        '<circle cx="210" cy="188" r="1.8" fill="var(--ink)" opacity="0.3" />' +
        '<circle cx="248" cy="160" r="2" fill="var(--ink)" opacity="0.28" />' +
        '<circle cx="180" cy="200" r="1.6" fill="var(--ink)" opacity="0.28" />' +
        '<circle cx="230" cy="206" r="1.4" fill="var(--ink)" opacity="0.25" /></svg>',
      board:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="70" y="92" width="260" height="116" rx="22" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="2" opacity="0.8" />' +
        '<rect x="92" y="112" width="216" height="16" rx="8" fill="none" stroke="var(--ink)" stroke-width="1.4" opacity="0.55" />' +
        '<path d="M88 130 Q200 142 312 128" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.25" />' +
        '<path d="M90 160 Q210 150 310 162" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.2" />' +
        '<path d="M92 186 Q200 198 308 184" fill="none" stroke="var(--ink)" stroke-width="1" opacity="0.22" /></svg>',
      scarf:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<path d="M86 70 L150 70 L310 230 L246 230 Z" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M108 70 L272 230" fill="none" stroke="var(--olive)" stroke-width="3" opacity="0.45" />' +
        '<path d="M128 70 L292 230" fill="none" stroke="var(--olive)" stroke-width="3" opacity="0.35" />' +
        '<path d="M86 92 L246 230" fill="none" stroke="var(--muted)" stroke-width="1.2" opacity="0.5" />' +
        '<path d="M86 114 L230 230" fill="none" stroke="var(--muted)" stroke-width="1.2" opacity="0.4" /></svg>',
      print:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="110" y="48" width="180" height="210" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M200 88 C170 120 150 150 168 188 C180 214 200 220 200 220 C200 220 220 214 232 188 C250 150 230 120 200 88 Z" fill="var(--olive)" stroke="var(--ink)" stroke-width="1.6" opacity="0.85" />' +
        '<path d="M200 140 C200 140 186 168 200 200" fill="none" stroke="var(--ink)" stroke-width="1.2" />' +
        '<path d="M184 150 L162 136" fill="none" stroke="var(--ink)" stroke-width="1.2" />' +
        '<path d="M216 150 L238 134" fill="none" stroke="var(--ink)" stroke-width="1.2" /></svg>',
      ring:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<ellipse cx="200" cy="150" rx="70" ry="70" fill="none" stroke="var(--muted)" stroke-width="18" />' +
        '<ellipse cx="200" cy="150" rx="70" ry="70" fill="none" stroke="var(--ink)" stroke-width="2" />' +
        '<ellipse cx="200" cy="150" rx="44" ry="44" fill="none" stroke="var(--ink)" stroke-width="2" />' +
        '<circle cx="200" cy="92" r="3" fill="var(--terracotta)" />' +
        '<circle cx="248" cy="124" r="2.2" fill="var(--terracotta)" />' +
        '<circle cx="252" cy="170" r="2.4" fill="var(--terracotta)" />' +
        '<circle cx="152" cy="124" r="2.2" fill="var(--terracotta)" /></svg>',
      ink:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="86" y="50" width="228" height="200" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M100 186 C150 160 180 200 230 170 C270 148 300 166 314 158" fill="none" stroke="var(--ink)" stroke-width="1.6" />' +
        '<path d="M100 200 C160 190 200 210 314 184" fill="none" stroke="var(--ink)" stroke-width="1.2" opacity="0.7" />' +
        '<path d="M210 170 C216 140 240 120 248 96" fill="none" stroke="var(--ink)" stroke-width="1.3" />' +
        '<circle cx="140" cy="168" r="10" fill="var(--sand)" stroke="var(--ink)" stroke-width="1" /></svg>',
      stool:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<ellipse cx="200" cy="108" rx="86" ry="22" fill="var(--terracotta)" stroke="var(--ink)" stroke-width="2" opacity="0.85" />' +
        '<path d="M150 118 L128 250" fill="none" stroke="var(--ink)" stroke-width="6" />' +
        '<path d="M200 128 L200 252" fill="none" stroke="var(--ink)" stroke-width="6" />' +
        '<path d="M252 118 L274 250" fill="none" stroke="var(--ink)" stroke-width="6" />' +
        '<path d="M150 118 L128 250" fill="none" stroke="var(--sand)" stroke-width="2" /></svg>',
      mugs:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<g transform="translate(-30,8)">' +
        '<path d="M130 110 L130 200 Q130 220 160 222 L190 222 Q220 220 220 200 L220 110 Z" fill="var(--olive)" stroke="var(--ink)" stroke-width="2" opacity="0.75" />' +
        '<ellipse cx="175" cy="110" rx="45" ry="12" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="1.6" />' +
        '<path d="M220 140 Q248 150 248 170 Q248 192 220 188" fill="none" stroke="var(--ink)" stroke-width="2" />' +
        "</g>" +
        '<g transform="translate(70,18)">' +
        '<path d="M130 110 L132 198 Q132 220 162 222 L192 222 Q220 220 218 198 L216 110 Z" fill="var(--olive)" stroke="var(--ink)" stroke-width="2" opacity="0.9" />' +
        '<ellipse cx="173" cy="110" rx="44" ry="12" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="1.6" />' +
        '<path d="M218 140 Q246 152 246 170 Q246 190 218 186" fill="none" stroke="var(--ink)" stroke-width="2" />' +
        "</g></svg>",
      towel:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<path d="M128 58 L272 58 L286 242 L114 242 Z" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M130 96 L274 96" fill="none" stroke="var(--olive)" stroke-width="10" opacity="0.45" />' +
        '<path d="M126 140 L278 140" fill="none" stroke="var(--terracotta)" stroke-width="10" opacity="0.4" />' +
        '<path d="M122 186 L282 186" fill="none" stroke="var(--olive)" stroke-width="10" opacity="0.45" /></svg>',
      pendant:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<path d="M200 48 C200 48 170 70 200 92 C230 70 200 48 200 48" fill="none" stroke="var(--ink)" stroke-width="2" />' +
        '<circle cx="200" cy="168" r="62" fill="var(--olive)" stroke="var(--ink)" stroke-width="2" opacity="0.85" />' +
        '<circle cx="200" cy="168" r="44" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="1.2" opacity="0.35" />' +
        '<circle cx="200" cy="92" r="5" fill="var(--muted)" stroke="var(--ink)" stroke-width="1.2" /></svg>',
      cards:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="150" y="64" width="140" height="100" fill="var(--sand)" stroke="var(--ink)" stroke-width="2" transform="rotate(-8 220 114)" />' +
        '<rect x="130" y="90" width="150" height="108" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" transform="rotate(-2 205 144)" />' +
        '<rect x="118" y="116" width="164" height="116" fill="var(--paper)" stroke="var(--ink)" stroke-width="2" />' +
        '<path d="M150 164 L250 164" stroke="var(--ink)" stroke-width="1.4" />' +
        '<path d="M168 184 L232 184" stroke="var(--muted)" stroke-width="1.2" /></svg>',
      flowers:
        '<svg viewBox="0 0 400 300" width="100%" aria-hidden="true">' +
        '<rect x="86" y="50" width="228" height="200" fill="var(--paper-deep)" stroke="var(--ink)" stroke-width="2" />' +
        '<circle cx="168" cy="130" r="22" fill="var(--terracotta)" opacity="0.55" />' +
        '<circle cx="206" cy="118" r="18" fill="var(--terracotta)" opacity="0.45" />' +
        '<circle cx="230" cy="148" r="20" fill="var(--olive)" opacity="0.4" />' +
        '<path d="M186 150 C180 190 170 210 164 226" fill="none" stroke="var(--olive)" stroke-width="1.6" />' +
        '<path d="M206 136 C208 180 214 206 220 226" fill="none" stroke="var(--olive)" stroke-width="1.6" />' +
        '<path d="M228 166 C222 196 226 214 234 226" fill="none" stroke="var(--olive)" stroke-width="1.6" /></svg>',
    };
    return arts[kind] || arts.bowl;
  }

  function listingCard(item) {
    var m = makerById(item.makerId);
    return (
      '<button type="button" class="card" data-go="#/listing/' + item.id + '">' +
      '<div class="card-art">' + productArt(item.art) +
      '<div class="card-badge">' + badgeSvg(56) + "</div></div>" +
      '<div class="card-body">' +
      '<div class="sample-mark">Sample listing</div>' +
      '<div class="card-title">' + escapeHtml(item.title) + "</div>" +
      '<div class="card-meta">' + escapeHtml(m.name) + " · " + escapeHtml(CRAFT_LABEL[item.craft]) + "</div>" +
      '<div class="card-price">' + escapeHtml(item.price) + "</div>" +
      "</div></button>"
    );
  }

  function renderHome() {
    return (
      '<div class="wrap hero">' +
      "<div>" +
      '<div class="eyebrow">Actual Intelligence</div>' +
      "<h1>Human-made is the new premium.</h1>" +
      '<p class="lead">As generated work gets cheap and everywhere, slightly uneven, slow, and real becomes something people pay more for. This shop only sells that work, and proves it.</p>' +
      '<div class="btn-row" style="margin-top:26px">' +
      '<button type="button" class="btn btn-primary" data-go="#/shop">Browse the shop</button>' +
      '<button type="button" class="btn btn-quiet" data-go="#/how">How certification works</button>' +
      "</div></div>" +
      '<div class="hero-badge">' + badgeSvg(160) + "</div>" +
      "</div>" +
      '<div class="band"><div class="wrap band-inner">' +
      '<div class="section-head"><h2>From the shop</h2>' +
      '<button type="button" class="link-btn" data-go="#/shop">See all sample listings</button></div>' +
      '<div class="grid">' + LISTINGS.slice(0, 4).map(listingCard).join("") + "</div>" +
      "</div></div>" +
      '<div class="wrap pad-tight">' +
      '<h2 style="margin:0 0 8px;font-size:22px">The badge is the product</h2>' +
      '<p class="muted" style="margin:0 0 24px;max-width:640px;line-height:1.55">Buyers are not asked to take a maker’s word for it. Every listing carries a Certified Human-Made badge, backed by process proof, a public pledge, and community reporting.</p>' +
      '<div class="grid-3">' +
      '<div class="pillar"><div class="pillar-title">Process proof</div><div class="pillar-detail">Time-lapse or process video, dated work-in-progress photos, and occasional studio check-ins sit on the listing, so you can see how the piece was made.</div></div>' +
      '<div class="pillar"><div class="pillar-title">Maker pledge</div><div class="pillar-detail">Each maker agrees, in public, that a person made the work and that generative AI was not used to design, produce, or finish it.</div></div>' +
      '<div class="pillar"><div class="pillar-title">Community reports</div><div class="pillar-detail">Buyers and other makers can flag a listing that looks generated. If the standard is broken, the buyer is refunded and the seller loses the badge.</div></div>' +
      "</div>" +
      '<div style="margin-top:28px"><button type="button" class="btn btn-quiet" data-go="#/how">Read the full process</button></div>' +
      "</div>" +
      '<div class="wrap pad-home-cta"><div class="maker-cta">' +
      '<div class="eyebrow-tight">For makers</div>' +
      "<h2>Sell work that can prove it was made by hand.</h2>" +
      '<p class="muted" style="margin:0 0 18px;max-width:620px;line-height:1.55">Take the pledge, show your process, and earn the badge. This preview uses starting prices only: an 8% commission, a £29 yearly verification fee, and an optional £79 premium badge.</p>' +
      '<div class="btn-row">' +
      '<button type="button" class="btn btn-primary" data-go="#/join">Become a certified maker</button>' +
      '<button type="button" class="btn btn-quiet" data-go="#/pricing">See maker pricing</button>' +
      "</div></div></div>"
    );
  }

  function renderShop(craft) {
    var shopList = listingsForCraft(craft);
    var chips = CRAFT_FILTERS.map(function (f) {
      var href = f.id === "all" ? "#/shop" : "#/shop/" + f.id;
      return (
        '<button type="button" class="chip' + (craft === f.id ? " is-on" : "") + '" data-go="' + href + '">' +
        escapeHtml(f.label) + "</button>"
      );
    }).join("");
    return (
      '<div class="wrap page-block">' +
      "<h1>The shop</h1>" +
      '<p class="intro">Every piece here is sample data for this preview, with a Certified Human-Made badge and a process you can open. Filter by craft, then open a listing to see the work-in-progress stages.</p>' +
      '<div class="filters">' + chips + "</div>" +
      '<div class="count">' + shopList.length + " sample " + (shopList.length === 1 ? "listing" : "listings") + "</div>" +
      '<div class="grid">' + shopList.map(listingCard).join("") + "</div>" +
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
    return (
      '<div class="wrap pad-listing listing">' +
      '<button type="button" class="link-btn" data-go="#/shop">Back to the shop</button>' +
      '<div class="listing-grid">' +
      '<div class="art-frame">' + productArt(listing.art) + "</div>" +
      "<div>" +
      '<div class="sample-mark">Sample listing</div>' +
      "<h1>" + escapeHtml(listing.title) + "</h1>" +
      '<div class="listing-price-row"><div class="price-lg">' + escapeHtml(listing.price) + "</div>" + badgeSvg(58) + "</div>" +
      '<div class="muted" style="margin-top:12px">' +
      escapeHtml(CRAFT_LABEL[listing.craft]) + " · " +
      '<button type="button" class="link-btn" style="padding:0;min-height:auto" data-go="#/maker/' + listing.makerId + '">' +
      escapeHtml(listingMaker.name) + ", " + escapeHtml(listingMaker.craftLabel.toLowerCase()) + "</button>" +
      " · " + escapeHtml(listingMaker.place) +
      "</div>" +
      '<p style="line-height:1.6;margin:16px 0 0">' + escapeHtml(listing.blurb) + "</p>" +
      '<p class="muted" style="line-height:1.6;margin:10px 0 0">Proof on this listing: ' + escapeHtml(listing.proof) +
      ". If a piece failed the human-made standard, the buyer would be refunded and the seller would lose the badge.</p>" +
      '<div class="eyebrow-tight" style="margin-top:22px">See the process</div>' +
      '<div class="stages">' + stageBtns + "</div>" +
      '<div class="stage-copy"><div style="font-size:16px;margin-bottom:6px">Stage ' +
      (state.stageIndex + 1) + " of " + listing.stages.length + ": " + escapeHtml(stage.title) +
      '</div><div class="muted" style="line-height:1.55">' + escapeHtml(stage.detail) + "</div></div>" +
      '<div style="margin-top:22px">' +
      '<button type="button" class="btn btn-quiet" id="report-btn">Report this listing</button>' +
      (state.reportNote
        ? '<p class="muted" style="margin:12px 0 0;line-height:1.55">In a live shop, this would start a community report for review. Nothing is sent from this preview.</p>'
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
      '<p style="line-height:1.6;max-width:640px">' + escapeHtml(maker.bio) + "</p>" +
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
    var proofs = [
      { title: "Process videos and time-lapse", detail: "Film the piece being made, from start to finish or in the key stages." },
      { title: "Work-in-progress photos", detail: "Dated shots of the piece as it takes shape, not only the finished photo." },
      { title: "Studio check-ins", detail: "A short walkthrough of the workspace, or an occasional scheduled visit." },
      { title: "The maker pledge", detail: "A public promise that AI was not used to produce the work." },
      { title: "Community reporting", detail: "Buyers and other makers can flag a listing that looks generated. It then goes back for review." },
      { title: "The badge itself", detail: "Shown on the shop and on every listing that passes. Lost if the standard is broken." },
    ];
    return (
      '<div class="wrap page-block">' +
      "<h1>How certification works</h1>" +
      '<p class="intro">The Certified Human-Made badge is not a logo a maker can simply add. It is earned with proof, kept in public, and can be lost.</p>' +
      '<h2 style="margin:0 0 14px;font-size:20px">For buyers</h2>' +
      '<ol class="steps">' +
      "<li><strong>Browse certified work.</strong> Every listing carries the badge. If it is here, a person made it.</li>" +
      "<li><strong>Check the proof.</strong> Open process video, work-in-progress photos, and studio check-ins before you buy.</li>" +
      "<li><strong>Buy with a guarantee.</strong> If a piece fails the human-made standard, you get your money back and the seller loses the badge.</li>" +
      "</ol>" +
      '<h2 style="margin:0 0 14px;font-size:20px">For makers</h2>' +
      '<ol class="steps">' +
      "<li><strong>Take the pledge.</strong> You agree, in public, that a person made the work and AI was not used in its production.</li>" +
      "<li><strong>Show your process.</strong> Upload time-lapse or process video, work-in-progress photos, and occasional studio check-ins.</li>" +
      "<li><strong>Earn the badge.</strong> Once the proof holds up, your shop and listings show Certified Human-Made, and you can sell.</li>" +
      "</ol>" +
      '<h2 style="margin:0 0 14px;font-size:20px">What counts as proof</h2>' +
      '<div class="grid-3">' +
      proofs.map(function (row) {
        return '<div class="proof-item"><div style="margin-bottom:6px">' + escapeHtml(row.title) +
          '</div><div class="proof-detail">' + escapeHtml(row.detail) + "</div></div>";
      }).join("") +
      "</div>" +
      '<div class="btn-row" style="margin-top:32px">' +
      '<button type="button" class="btn btn-primary" data-go="#/shop">Browse sample listings</button>' +
      '<button type="button" class="btn btn-quiet" data-go="#/join">Become a certified maker</button>' +
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
      "<li><strong>Take the pledge.</strong> You agree, in public, that a person made the work and that generative AI was not used to design, produce, or finish it.</li>" +
      "<li><strong>Upload process proof.</strong> Time-lapse or process video, dated work-in-progress photos, and a short studio check-in.</li>" +
      "<li><strong>Wait for review.</strong> If the proof is thin, you will be asked for more before the listing can go live.</li>" +
      "<li><strong>Earn the badge and start selling.</strong> The badge sits on your shop and on every listing that passes. A yearly verification fee keeps the review going; sales then take a commission.</li>" +
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
        who: "The maker, on each sale",
        detail: "A cut of the sale, in line with other craft marketplaces. This is a starting figure to argue over, not a set rate.",
      },
      {
        name: "Verification fee",
        amount: "£29 a year",
        who: "The maker, yearly",
        detail: "Pays for the review that unlocks the Certified Human-Made badge, and for the yearly check that keeps it.",
      },
      {
        name: "Premium badge",
        amount: "£79 a year",
        who: "The maker, optional",
        detail: "Higher listing placement and a fuller proof page, for makers who want to show more of the process.",
      },
    ];
    return (
      '<div class="wrap page-block">' +
      "<h1>Maker pricing</h1>" +
      '<p class="intro" style="margin-bottom:8px">Buyers pay the listed price. The platform’s income comes from makers who want access to people paying the human-made premium.</p>' +
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
      join: "Become a certified maker — Actual Intelligence",
      pricing: "Maker pricing — Actual Intelligence",
    };
    if (route.page === "listing") titles.listing = listingById(route.id).title + " — Actual Intelligence";
    if (route.page === "maker") titles.maker = makerById(route.id).name + " — Actual Intelligence";
    document.title = titles[route.page] || titles.home;

    var body = "";
    if (route.page === "home") body = renderHome();
    else if (route.page === "shop") body = renderShop(route.craft);
    else if (route.page === "listing") body = renderListing(route.id);
    else if (route.page === "maker") body = renderMaker(route.id);
    else if (route.page === "how") body = renderHow();
    else if (route.page === "join") body = renderJoin();
    else body = renderPricing();

    document.getElementById("root").innerHTML =
      '<div class="banner">Temporary preview for Kage and Craig. Sample listings and makers are example data, not a live shop. Product pictures are simple drawings, not photographs of real pieces.</div>' +
      '<header class="site-header"><div class="wrap header-inner">' +
      '<button type="button" class="brand" data-go="#/">Actual Intelligence</button>' +
      "<nav>" +
      '<button type="button" class="link-btn' + (navActive(route, "shop") ? " is-active" : "") + '" data-go="#/shop">Shop</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "how") ? " is-active" : "") + '" data-go="#/how">How it works</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "pricing") ? " is-active" : "") + '" data-go="#/pricing">Pricing</button>' +
      '<button type="button" class="link-btn' + (navActive(route, "join") ? " is-active" : "") + '" data-go="#/join">Become a maker</button>' +
      "</nav></div></header>" +
      "<main>" + body + "</main>" +
      '<footer class="site-footer"><div class="wrap footer-inner">Actual Intelligence is a working name for Project Y. This site is a temporary preview so Kage and Craig can feel how the shop might look and work. It is not a live company, and nothing here can be bought. Made by Grok Bot on 25 November 2026.</div></footer>';

    if (route.page === "join") bindJoin();
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
      var can = state.interestName.trim() && state.interestEmail.trim() && state.pledgeRead;
      btn.disabled = !can;
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
