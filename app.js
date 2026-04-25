const scenarios = [
  {
    id: "cafe",
    label: "Stuttgart cafe",
    summary: "Cold, overcast lunch break near a quiet cafe.",
    heroTitle: "Cold outside, low cafe demand",
    heroText:
      "Mia is moving slowly in Stuttgart Mitte, the weather is chilly, and a partner cafe has unusually low lunchtime volume.",
    acceptance: "31%",
    walkTime: "2 min",
    config:
      "Signals are configured per city: DWD weather feed, Stuttgart event calendar, geo-fencing zones, and a merchant demand stream that simulates Payone transaction density.",
    notificationTitle: "Cold outside? Your cappuccino is waiting.",
    notificationText:
      "Cafe Jakob is 80m away and unusually quiet right now. Fresh batch just brewed.",
    mood: "Generated for a chilly browsing moment",
    expiry: "Valid 12 min",
    headline: "Warm up with a cappuccino and almond bun for 18% off.",
    description:
      "A situational offer assembled for this exact moment: short walk, midday hunger, low merchant volume, and a proven preference for warm drinks.",
    merchant: "Cafe Jakob",
    distance: "80 m",
    value: "18% off",
    reason:
      "Why now: 11C, overcast skies, low nearby transaction density, and a browsing pace rather than commute behavior.",
    tokenText:
      "Scan within 12 minutes to redeem instantly, or let cashback settle automatically after checkout.",
    status: "Offer generated",
    contextSignals: [
      {
        label: "Weather",
        title: "11C and overcast",
        body:
          "The system spots a cold-weather comfort window that historically lifts response to hot-drink offers."
      },
      {
        label: "Movement",
        title: "Browsing, not commuting",
        body:
          "Two slow pauses in ten minutes suggest Mia is open to discovery instead of rushing to a destination."
        },
      {
        label: "Merchant demand",
        title: "Transaction volume below weekday baseline",
        body:
          "The cafe's lunch-period demand proxy is down, making this a strong moment for dynamic activation."
      },
      {
        label: "Location",
        title: "80 metres from partner merchant",
        body:
          "Short walking distance keeps the offer realistic and instantly actionable without needing a map drilldown."
      }
    ],
    merchantGoal: "Fill quiet lunchtime capacity",
    merchantTrigger: "Cold weather + low transaction density",
    merchantGuardrail: "Max 20% off, pastry bundle preferred",
    perfViews: "1,284",
    perfAcceptance: "31%",
    perfRedemption: "276",
    perfUplift: "+17%",
    generatedCampaign:
      "AI created a warm, emotionally framed bundle instead of a generic discount because weather and user pace suggested comfort-seeking behavior.",
    merchantContextSummary:
      "Composite trigger active: weather comfort need, near-store proximity, low demand window, and midday snack intent.",
    merchantRedemptionState:
      "Awaiting scan. If completed, settlement can issue immediate validation and cashback confirmation."
  },
  {
    id: "market",
    label: "Saturday market",
    summary: "Sunny festival footfall creates a bakery upsell moment.",
    heroTitle: "Festival crowd, bakery stock to move",
    heroText:
      "An outdoor event nearby is increasing footfall while a bakery wants to push fresh inventory before the afternoon drop-off.",
    acceptance: "42%",
    walkTime: "3 min",
    config:
      "This configuration swaps in a local event feed and merchant inventory pressure signal while keeping the same runtime logic and wallet shell.",
    notificationTitle: "Headed to the market? Grab a cinnamon twist on the way.",
    notificationText:
      "Backstube Keller is 120m away with fresh trays ready and a queue that is shorter than usual.",
    mood: "Generated for festival footfall",
    expiry: "Valid 20 min",
    headline: "Fresh cinnamon twist + coffee combo, crafted for your route.",
    description:
      "The wallet changes tone when the city feels lively: less cozy reassurance, more route-aware momentum and snack convenience.",
    merchant: "Backstube Keller",
    distance: "120 m",
    value: "15% off",
    reason:
      "Why now: sunny weather, event-driven foot traffic, live inventory pressure, and a pedestrian path that passes the storefront.",
    tokenText:
      "This token expires after the market rush begins. Merchants can validate at scan or trigger automatic cashback settlement.",
    status: "Offer accepted",
    contextSignals: [
      {
        label: "Events",
        title: "Weekly market active nearby",
        body:
          "The event feed predicts higher footfall and stronger impulse conversion for quick grab-and-go offers."
      },
      {
        label: "Weather",
        title: "Clear skies and 18C",
        body:
          "Comfortable weather increases walking propensity, so the wallet expands its effective catchment radius."
      },
      {
        label: "Inventory",
        title: "Fresh batch needs sell-through",
        body:
          "Merchant-side rules allow the AI to prioritize same-day baked goods without exposing raw inventory details to the user."
      },
      {
        label: "Route relevance",
        title: "Offer sits directly on Mia's path",
        body:
          "No rerouting required, so the interface can present the offer as a frictionless stop instead of a destination."
      }
    ],
    merchantGoal: "Move fresh inventory before 15:00",
    merchantTrigger: "Event footfall + unsold fresh batch",
    merchantGuardrail: "Keep margin above 28%",
    perfViews: "2,096",
    perfAcceptance: "42%",
    perfRedemption: "501",
    perfUplift: "+24%",
    generatedCampaign:
      "AI leaned into route convenience and freshness cues to match an outdoor, high-energy city moment rather than a comfort narrative.",
    merchantContextSummary:
      "Composite trigger active: event demand, sunny walkability, time-bound inventory, and high route relevance.",
    merchantRedemptionState:
      "Token ready. Previous redemptions from this scenario settled in under 3 seconds with no cashier intervention."
  },
  {
    id: "rain",
    label: "Rainy commute",
    summary: "Heavy rain redirects a pharmacy and umbrella cross-sell.",
    heroTitle: "Heavy rain, commuter detour opportunity",
    heroText:
      "Bad weather and transit waiting time create a practical intent moment better served with utility than indulgence.",
    acceptance: "27%",
    walkTime: "1 min",
    config:
      "A different merchant category can plug into the same interface by changing signal weights and brand tone, not by rebuilding the app.",
    notificationTitle: "Caught in the rain? A dry walk home is one minute away.",
    notificationText:
      "Apotheke am Tor has travel umbrellas at the front counter and no current wait.",
    mood: "Generated for urgent utility",
    expiry: "Valid 8 min",
    headline: "Pick up a compact umbrella now and get instant cashback at checkout.",
    description:
      "The offer language becomes factual and urgent when the inferred need is practical. Same engine, different emotional framing.",
    merchant: "Apotheke am Tor",
    distance: "60 m",
    value: "EUR4 cashback",
    reason:
      "Why now: rain spike, short waiting window near transit, low queue depth, and a strong utility-match signal.",
    tokenText:
      "Cashier scans once, validation completes, and cashback is booked automatically into the wallet balance.",
    status: "Awaiting redemption",
    contextSignals: [
      {
        label: "Weather",
        title: "Rain intensity spike",
        body:
          "The system detects a sudden shift from drizzle to heavy rain and prioritizes protective essentials over discretionary categories."
      },
      {
        label: "Transit",
        title: "Short dwell time at a stop",
        body:
          "A waiting state near public transport opens a narrow utility window with high conversion potential."
      },
      {
        label: "Merchant operations",
        title: "No in-store queue",
        body:
          "Fast checkout makes this category viable because the redemption can fit inside the commuter's wait time."
      },
      {
        label: "Privacy",
        title: "Intent abstracted on device",
        body:
          "Only the inferred need state reaches the cloud service; raw movement history remains local."
      }
    ],
    merchantGoal: "Capture weather-driven essentials demand",
    merchantTrigger: "Heavy rain + transit dwell",
    merchantGuardrail: "Cashback only, no price erosion on core SKUs",
    perfViews: "934",
    perfAcceptance: "27%",
    perfRedemption: "188",
    perfUplift: "+11%",
    generatedCampaign:
      "AI switched from emotional copy to practical urgency, proving the offer engine adapts tone to situational need rather than using fixed templates.",
    merchantContextSummary:
      "Composite trigger active: weather emergency, minute-scale availability, short walking distance, and queue-free checkout.",
    merchantRedemptionState:
      "Cashback mode active. Redemption closes the loop without requiring a coupon code or manual approval."
  }
];

const elements = {
  tabs: document.getElementById("scenarioTabs"),
  heroContextTitle: document.getElementById("heroContextTitle"),
  heroContextText: document.getElementById("heroContextText"),
  heroAcceptance: document.getElementById("heroAcceptance"),
  heroWalkTime: document.getElementById("heroWalkTime"),
  configText: document.getElementById("configText"),
  notificationCard: document.getElementById("notificationCard"),
  offerMood: document.getElementById("offerMood"),
  offerExpiry: document.getElementById("offerExpiry"),
  offerHeadline: document.getElementById("offerHeadline"),
  offerDescription: document.getElementById("offerDescription"),
  offerMerchant: document.getElementById("offerMerchant"),
  offerDistanceDetail: document.getElementById("offerDistanceDetail"),
  offerValue: document.getElementById("offerValue"),
  offerReason: document.getElementById("offerReason"),
  offerCard: document.getElementById("offerCard"),
  checkoutFlow: document.getElementById("checkoutFlow"),
  tokenCard: document.getElementById("tokenCard"),
  tokenMerchant: document.getElementById("tokenMerchant"),
  tokenText: document.getElementById("tokenText"),
  tokenStatus: document.getElementById("tokenStatus"),
  qrShell: document.getElementById("qrShell"),
  passLabel: document.getElementById("passLabel"),
  passChip: document.getElementById("passChip"),
  scanBanner: document.getElementById("scanBanner"),
  scanText: document.getElementById("scanText"),
  successCard: document.getElementById("successCard"),
  successHeadline: document.getElementById("successHeadline"),
  successText: document.getElementById("successText"),
  successValue: document.getElementById("successValue"),
  stepIssue: document.getElementById("stepIssue"),
  stepScan: document.getElementById("stepScan"),
  stepSuccess: document.getElementById("stepSuccess"),
  walletStatus: document.getElementById("walletStatus"),
  contextSignals: document.getElementById("contextSignals"),
  merchantPanel: document.querySelector(".merchant-panel"),
  merchantName: document.getElementById("merchantName"),
  merchantGoal: document.getElementById("merchantGoal"),
  merchantTrigger: document.getElementById("merchantTrigger"),
  merchantGuardrail: document.getElementById("merchantGuardrail"),
  perfViews: document.getElementById("perfViews"),
  perfAcceptance: document.getElementById("perfAcceptance"),
  perfRedemption: document.getElementById("perfRedemption"),
  perfUplift: document.getElementById("perfUplift"),
  generatedCampaign: document.getElementById("generatedCampaign"),
  merchantContextSummary: document.getElementById("merchantContextSummary"),
  merchantRedemptionState: document.getElementById("merchantRedemptionState"),
  declineButton: document.getElementById("declineButton"),
  acceptButton: document.getElementById("acceptButton")
};

let activeScenario = scenarios[0];
let offerState = "generated";
let flowTimerIds = [];

const metricBase = {
  cafe: { views: 1284, acceptance: 31, redemptions: 276, uplift: 17 },
  market: { views: 2096, acceptance: 42, redemptions: 501, uplift: 24 },
  rain: { views: 934, acceptance: 27, redemptions: 188, uplift: 11 }
};

const metricLift = {
  cafe: { views: 1285, acceptance: 32, redemptions: 277, uplift: 18 },
  market: { views: 2097, acceptance: 43, redemptions: 502, uplift: 25 },
  rain: { views: 935, acceptance: 28, redemptions: 189, uplift: 12 }
};

function formatMetricNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatPercent(value) {
  return `${value}%`;
}

function formatUplift(value) {
  return `+${value}%`;
}

function getCashbackLabel() {
  if (activeScenario.id === "rain") {
    return "EUR4.00";
  }

  if (activeScenario.id === "market") {
    return "EUR2.10";
  }

  return "EUR2.70";
}

function clearFlowTimers() {
  flowTimerIds.forEach((timerId) => window.clearTimeout(timerId));
  flowTimerIds = [];
}

function queueFlowStep(callback, delay) {
  const timerId = window.setTimeout(callback, delay);
  flowTimerIds.push(timerId);
}

function setStepState(activeStep, completedSteps = []) {
  [elements.stepIssue, elements.stepScan, elements.stepSuccess].forEach((step) => {
    step.classList.remove("active", "done");
    if (completedSteps.includes(step)) {
      step.classList.add("done");
    }
  });

  if (activeStep) {
    activeStep.classList.add("active");
  }
}

function resetCheckoutUI() {
  elements.offerCard.classList.remove("accepting");
  elements.checkoutFlow.classList.add("hidden");
  elements.tokenCard.classList.add("hidden");
  elements.scanBanner.classList.add("hidden");
  elements.successCard.classList.add("hidden");
  elements.qrShell.classList.remove("scanning", "approved");
  elements.tokenStatus.textContent = "Ready to scan";
  elements.passChip.textContent = "Live";
  elements.scanText.textContent = "Scanning wallet pass and validating token.";
  elements.successHeadline.textContent = "Cashback credited";
  elements.successText.textContent =
    "Payment validated. Cashback is now back in Mia's wallet.";
  elements.successValue.textContent = getCashbackLabel();
  elements.passLabel.textContent = "Payone instant redemption pass";
  elements.acceptButton.disabled = false;
  elements.declineButton.disabled = false;
  setStepState(elements.stepIssue);
  applyMerchantMetrics(metricBase[activeScenario.id], false);
}

function applyMerchantMetrics(metrics, updating) {
  elements.perfViews.textContent = formatMetricNumber(metrics.views);
  elements.perfAcceptance.textContent = formatPercent(metrics.acceptance);
  elements.perfRedemption.textContent = formatMetricNumber(metrics.redemptions);
  elements.perfUplift.textContent = formatUplift(metrics.uplift);

  elements.merchantPanel.classList.toggle("updating", updating);
  [elements.perfViews, elements.perfAcceptance, elements.perfRedemption, elements.perfUplift].forEach(
    (node) => node.parentElement.classList.toggle("updating", updating)
  );
}

function renderScenarioTabs() {
  elements.tabs.innerHTML = "";

  scenarios.forEach((scenario) => {
    const button = document.createElement("button");
    button.className = `scenario-button${scenario.id === activeScenario.id ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${scenario.label}</strong><span>${scenario.summary}</span>`;
    button.addEventListener("click", () => {
      activeScenario = scenario;
      clearFlowTimers();
      offerState = "generated";
      render();
    });
    elements.tabs.appendChild(button);
  });
}

function renderSignals() {
  elements.contextSignals.innerHTML = "";

  activeScenario.contextSignals.forEach((signal) => {
    const card = document.createElement("article");
    card.className = "context-card";
    card.innerHTML = `
      <span>${signal.label}</span>
      <strong>${signal.title}</strong>
      <p>${signal.body}</p>
    `;
    elements.contextSignals.appendChild(card);
  });
}

function renderNotification() {
  elements.notificationCard.innerHTML = `
    <strong>${activeScenario.notificationTitle}</strong>
    <p>${activeScenario.notificationText}</p>
  `;
}

function renderOffer() {
  elements.offerMood.textContent = activeScenario.mood;
  elements.offerExpiry.textContent = activeScenario.expiry;
  elements.offerHeadline.textContent = activeScenario.headline;
  elements.offerDescription.textContent = activeScenario.description;
  elements.offerMerchant.textContent = activeScenario.merchant;
  elements.offerDistanceDetail.textContent = activeScenario.distance;
  elements.offerValue.textContent = activeScenario.value;
  elements.offerReason.textContent = activeScenario.reason;
  elements.tokenMerchant.textContent = activeScenario.merchant;
  elements.tokenText.textContent = activeScenario.tokenText;
}

function renderMerchant() {
  elements.merchantName.textContent = activeScenario.merchant;
  elements.merchantGoal.textContent = activeScenario.merchantGoal;
  elements.merchantTrigger.textContent = activeScenario.merchantTrigger;
  elements.merchantGuardrail.textContent = activeScenario.merchantGuardrail;
  elements.perfViews.textContent = activeScenario.perfViews;
  elements.perfAcceptance.textContent = activeScenario.perfAcceptance;
  elements.perfRedemption.textContent = activeScenario.perfRedemption;
  elements.perfUplift.textContent = activeScenario.perfUplift;
  elements.generatedCampaign.textContent = activeScenario.generatedCampaign;
  elements.merchantContextSummary.textContent = activeScenario.merchantContextSummary;
  applyMerchantMetrics(metricBase[activeScenario.id], false);
}

function renderHero() {
  elements.heroContextTitle.textContent = activeScenario.heroTitle;
  elements.heroContextText.textContent = activeScenario.heroText;
  elements.heroAcceptance.textContent = activeScenario.acceptance;
  elements.heroWalkTime.textContent = activeScenario.walkTime;
  elements.configText.textContent = activeScenario.config;
}

function renderState() {
  if (offerState === "dismissed") {
    elements.offerCard.classList.add("hidden");
    elements.notificationCard.classList.add("hidden");
    elements.walletStatus.textContent = "Offer dismissed";
    elements.merchantRedemptionState.textContent =
      "Offer dismissed. Aggregate decline metrics still inform future creative generation.";
    return;
  }

  if (offerState === "generated") {
    elements.offerCard.classList.remove("hidden");
    elements.notificationCard.classList.remove("hidden");
    resetCheckoutUI();
    elements.walletStatus.textContent = "Offer generated";
    elements.merchantRedemptionState.textContent = activeScenario.merchantRedemptionState;
    return;
  }

  if (offerState === "accepting") {
    elements.offerCard.classList.add("accepting");
    elements.checkoutFlow.classList.remove("hidden");
    elements.tokenCard.classList.add("hidden");
    elements.walletStatus.textContent = "Accepting offer";
    elements.merchantRedemptionState.textContent =
      "Offer accepted. Token issuance has started and the merchant view is preparing validation.";
    return;
  }

  if (offerState === "token-issued") {
    elements.offerCard.classList.remove("accepting");
    elements.checkoutFlow.classList.remove("hidden");
    elements.tokenCard.classList.remove("hidden");
    elements.scanBanner.classList.add("hidden");
    elements.successCard.classList.add("hidden");
    elements.qrShell.classList.remove("scanning", "approved");
    elements.tokenStatus.textContent = "Ready to scan";
    elements.passChip.textContent = "Issued";
    elements.walletStatus.textContent = "Token ready";
    elements.merchantRedemptionState.textContent =
      "Dynamic token issued. Merchant can scan the wallet pass or validate cashback automatically.";
    setStepState(elements.stepScan, [elements.stepIssue]);
    return;
  }

  if (offerState === "scanning") {
    elements.tokenCard.classList.remove("hidden");
    elements.scanBanner.classList.remove("hidden");
    elements.successCard.classList.add("hidden");
    elements.qrShell.classList.add("scanning");
    elements.tokenStatus.textContent = "Validating";
    elements.passChip.textContent = "Validating";
    elements.walletStatus.textContent = "Merchant validating";
    elements.merchantRedemptionState.textContent =
      "Merchant terminal is validating the wallet pass against the live token feed.";
    setStepState(elements.stepSuccess, [elements.stepIssue, elements.stepScan]);
    applyMerchantMetrics(metricLift[activeScenario.id], true);
    return;
  }

  if (offerState === "approved") {
    elements.tokenCard.classList.remove("hidden");
    elements.scanBanner.classList.add("hidden");
    elements.successCard.classList.remove("hidden");
    elements.qrShell.classList.remove("scanning");
    elements.qrShell.classList.add("approved");
    elements.tokenStatus.textContent = "Approved";
    elements.passChip.textContent = "Approved";
    elements.walletStatus.textContent = "Cashback credited";
    elements.merchantRedemptionState.textContent =
      "Validation approved. Settlement and attribution have completed successfully.";
    setStepState(null, [elements.stepIssue, elements.stepScan, elements.stepSuccess]);
    applyMerchantMetrics(metricLift[activeScenario.id], false);
    return;
  }
}

function render() {
  renderScenarioTabs();
  renderHero();
  renderSignals();
  renderNotification();
  renderOffer();
  renderMerchant();
  renderState();
}

function startRedemptionFlow() {
  clearFlowTimers();
  offerState = "accepting";
  renderState();
  elements.acceptButton.disabled = true;
  elements.declineButton.disabled = true;

  queueFlowStep(() => {
    offerState = "token-issued";
    renderState();
  }, 650);

  queueFlowStep(() => {
    offerState = "scanning";
    renderState();
  }, 1650);

  queueFlowStep(() => {
    offerState = "approved";
    renderState();
  }, 2900);
}

function declineOfferFlow() {
  clearFlowTimers();
  offerState = "dismissed";
  renderState();
}

function finishRedemptionFlow() {
  offerState = "approved";
  renderState();
}

elements.acceptButton.addEventListener("click", startRedemptionFlow);
elements.declineButton.addEventListener("click", declineOfferFlow);

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.jump);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

render();