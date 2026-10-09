import { Question } from "../types";

/**
 * Psych 4110 (Psychopharmacology), Exam 1: Weeks 1–2.
 * Written from the Week 1–2 lecture slides and class sessions, plus the
 * textbook's Chapter 1–5 end-of-chapter review questions.
 * The same bank powers the standalone "Dose Quest" study artifact.
 */
export const PSYCH4110_EXAM1: Question[] = [
  {
    "id": "psy-b1-1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What is the definition of a “drug”?",
    "keyGroups": [
      [
        "chemical",
        "substance",
        "compound"
      ],
      [
        "alter",
        "change",
        "affect",
        "physiolog",
        "function"
      ]
    ],
    "explanation": "A chemical substance that, once in the body, alters some normal physiological function. Every medicine is a drug; the labels differ by connotation and context.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What is the general flowchart of events when a drug is taken?",
    "keyGroups": [
      [
        "absor",
        "administ",
        "taken"
      ],
      [
        "distribut",
        "circulat",
        "blood"
      ],
      [
        "receptor",
        "bind",
        "effect",
        "action"
      ],
      [
        "liver",
        "metabol",
        "biotransform"
      ],
      [
        "excret",
        "kidney",
        "urine",
        "elimin"
      ]
    ],
    "explanation": "Administration → absorption into blood → distribution (incl. across the BBB) → binding at receptors → biotransformation by the liver → excretion by the kidneys.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What is the difference between enteral and parenteral routes?",
    "keyGroups": [
      [
        "gi",
        "alimentary",
        "digest",
        "gut",
        "stomach",
        "swallow",
        "oral"
      ],
      [
        "other",
        "bypass",
        "not",
        "outside",
        "inject",
        "everything else"
      ]
    ],
    "explanation": "Enteral goes through the alimentary canal (GI tract). Parenteral is any route that bypasses the GI tract.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What are the major limitations of the enteral route?",
    "keyGroups": [
      [
        "slow",
        "variab",
        "unpredict",
        "food",
        "time"
      ],
      [
        "acid",
        "enzyme",
        "destroy",
        "break",
        "first pass",
        "liver"
      ]
    ],
    "explanation": "Slow and unpredictable absorption (food, ~20–30 min), stomach acid and enzymes can destroy drugs, large molecules get broken down, first-pass through the liver, hard-to-control dose.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-5",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · Name the three classes of parenteral routes.",
    "keyGroups": [
      [
        "inject"
      ],
      [
        "pulmon",
        "inhal",
        "lung"
      ],
      [
        "topical",
        "skin",
        "sublingual",
        "nasal"
      ]
    ],
    "explanation": "Injection (IV, IM, subcutaneous), pulmonary (inhalation), topical (sublingual, intranasal, skin).",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What is the significance of a drug entering circulation?",
    "keyGroups": [
      [
        "whole body",
        "entire body",
        "everywhere",
        "all",
        "every",
        "throughout",
        "brain"
      ]
    ],
    "explanation": "Once in the blood, the drug reaches every compartment, including the brain.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What are the structural components of the cell membrane?",
    "keyGroups": [
      [
        "lipid",
        "phospholipid",
        "fat",
        "bilayer"
      ],
      [
        "protein",
        "receptor",
        "channel",
        "transport"
      ]
    ],
    "explanation": "A phospholipid bilayer (double layer of fat) with embedded proteins: receptors, channels, transporters.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-8",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · Define “absorption.”",
    "keyGroups": [
      [
        "time",
        "rate",
        "how long"
      ],
      [
        "blood"
      ]
    ],
    "explanation": "The time it takes for a population of drug to enter the blood after administration.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-9",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What is the difference between “bound” and “free” drug molecules?",
    "keyGroups": [
      [
        "albumin",
        "protein",
        "attach",
        "bound"
      ],
      [
        "free",
        "unattach",
        "act",
        "leave",
        "diffus",
        "active"
      ]
    ],
    "explanation": "Bound molecules are attached to blood proteins like albumin; they can't leave the blood or act, so they're a reservoir. Free molecules can diffuse into tissue and produce effects.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-10",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What is “lipid solubility”?",
    "keyGroups": [
      [
        "dissolve",
        "solub",
        "fat",
        "lipid"
      ]
    ],
    "explanation": "A molecule's ability to dissolve in fat. It lets drugs cross membranes and the BBB, and store in fat.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-11",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What is the blood-brain barrier, and how does it affect how drugs influence behavior?",
    "keyGroups": [
      [
        "tight",
        "capillar"
      ],
      [
        "glia"
      ],
      [
        "lipid",
        "membrane",
        "4",
        "four",
        "only",
        "keep out",
        "toxin"
      ]
    ],
    "explanation": "Tight-gap brain capillaries plus glial cells; 4 membranes to cross. Only lipid-soluble drugs get in easily, so the BBB decides which drugs can change behavior.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-12",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What are the two steps in getting a drug out of the body?",
    "keyGroups": [
      [
        "liver",
        "biotransform",
        "metabol"
      ],
      [
        "kidney",
        "urine",
        "filter"
      ]
    ],
    "explanation": "(1) Liver biotransformation into a less lipid-soluble form; (2) kidney filtering into urine.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-13",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · Name the family of enzymes that biotransform most drug molecules.",
    "keyGroups": [
      [
        "p450",
        "p 450",
        "cyp",
        "cytochrome"
      ]
    ],
    "explanation": "Cytochrome P450 (CYP450). Six enzymes handle 90% of drugs.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-14",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What is the half-life of a drug, and why does it matter?",
    "keyGroups": [
      [
        "half"
      ],
      [
        "time",
        "clear"
      ],
      [
        "long",
        "accumul",
        "dose",
        "94",
        "how much",
        "last"
      ]
    ],
    "explanation": "The time to clear half a dose from the blood. ~4 half-lives clear 94%. It shows how long the drug acts and whether daily doses accumulate.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-15",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · Name the different types of drug receptors.",
    "keyGroups": [
      [
        "neurotransmitter"
      ],
      [
        "enzyme"
      ],
      [
        "transport",
        "reuptake"
      ]
    ],
    "explanation": "Neurotransmitter receptors, enzymes, membrane transport mechanisms.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-16",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · What are the ways to express dose-response curves?",
    "keyGroups": [
      [
        "intensity",
        "effect",
        "graded",
        "magnitude",
        "plateau"
      ],
      [
        "frequency",
        "distribut"
      ],
      [
        "cumulative"
      ]
    ],
    "explanation": "Effect intensity vs dose; frequency distribution of responders; cumulative percent of subjects responding.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-17",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What is the ED50 of a drug?",
    "keyGroups": [
      [
        "dose"
      ],
      [
        "50",
        "half"
      ]
    ],
    "explanation": "The dose at which 50% of the population shows the effect.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-18",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 1 · What is the LD50 of a drug?",
    "keyGroups": [
      [
        "dose"
      ],
      [
        "kill",
        "lethal",
        "death",
        "die"
      ],
      [
        "50",
        "half"
      ]
    ],
    "explanation": "The dose that kills 50% of subjects (from animal research).",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b1-19",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 1 · Book example: LD50 = 130. The attention effect has ED50 = 30; heart palpitations have ED50 = 70. Which TI is right for palpitations?",
    "choices": [
      "1.86 (130 ÷ 70)",
      "4.3 (130 ÷ 30)",
      "0.54 (70 ÷ 130)",
      "100 (130 − 30)"
    ],
    "answer": "1.86 (130 ÷ 70)",
    "explanation": "TI = LD50 ÷ ED50. Palpitations: 130/70 ≈ 1.86, closer to the lethal curve. Attention: 130/30 ≈ 4.3, the safer effect.",
    "tag": "Textbook Ch 1 review"
  },
  {
    "id": "psy-b2-1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 2 · What is the difference between the CNS and the PNS?",
    "keyGroups": [
      [
        "brain",
        "spinal"
      ],
      [
        "outside",
        "peripher",
        "nerves",
        "rest",
        "body"
      ]
    ],
    "explanation": "CNS = brain and spinal cord. PNS = all nerves outside them (somatic and autonomic).",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 2 · What are the two divisions of the autonomic nervous system?",
    "keyGroups": [
      [
        "sympathetic"
      ],
      [
        "parasympathetic"
      ]
    ],
    "explanation": "Sympathetic and parasympathetic.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 2 · What does the sympathetic division of the ANS do?",
    "keyGroups": [
      [
        "fight",
        "flight",
        "arous",
        "stress",
        "heart",
        "activat",
        "emergenc"
      ]
    ],
    "explanation": "Fight or flight: raises heart rate and blood pressure, dilates pupils, slows digestion. Parasympathetic = rest and digest.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 2 · What are the five basic neuroanatomical divisions of the brain?",
    "keyGroups": [
      [
        "telencephalon"
      ],
      [
        "diencephalon"
      ],
      [
        "mesencephalon"
      ],
      [
        "metencephalon"
      ],
      [
        "myelencephalon"
      ]
    ],
    "explanation": "Telencephalon, diencephalon, mesencephalon, metencephalon, myelencephalon.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-5",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 2 · Name a structure for each of the five divisions.",
    "keyGroups": [
      [
        "cortex",
        "basal",
        "hippocamp",
        "amygdala"
      ],
      [
        "thalamus",
        "hypothalamus"
      ],
      [
        "nigra",
        "vta",
        "tegment",
        "tectum"
      ],
      [
        "pons",
        "cerebellum"
      ],
      [
        "medulla"
      ]
    ],
    "explanation": "Tel: cortex/basal ganglia/hippocampus/amygdala. Di: thalamus/hypothalamus. Mes: substantia nigra/VTA. Met: pons/cerebellum. Myel: medulla.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 2 · What is the limbic system?",
    "keyGroups": [
      [
        "emotion"
      ]
    ],
    "explanation": "Interconnected nuclei that regulate emotion (not strictly one circuit).",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 2 · Describe one specific functional “system.”",
    "keyGroups": [
      [
        "nigr",
        "forebrain bundle",
        "accumbens",
        "vta",
        "limbic"
      ],
      [
        "coordinat",
        "movement",
        "choice",
        "arous",
        "reinforc",
        "crav",
        "want",
        "emotion",
        "basal"
      ]
    ],
    "explanation": "E.g., nigrostriatal: substantia nigra → basal ganglia, coordinates behavior and choices (lost in Parkinson's). Or MFB (arousal, reinforcement) or VTA → NAc (craving, wanting).",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 2 · What are the components of the synapse?",
    "keyGroups": [
      [
        "presynaptic",
        "terminal",
        "vesicle"
      ],
      [
        "cleft",
        "gap"
      ],
      [
        "postsynaptic",
        "receptor"
      ]
    ],
    "explanation": "Presynaptic terminal (with vesicles), synaptic cleft, postsynaptic membrane with receptors.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-9",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 2 · What is a “vesicle”?",
    "keyGroups": [
      [
        "sac",
        "package",
        "contain",
        "store",
        "bubble"
      ],
      [
        "neurotransmitter"
      ]
    ],
    "explanation": "A small membrane sac in the presynaptic terminal that stores neurotransmitter.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-10",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 2 · How does exocytosis occur?",
    "keyGroups": [
      [
        "action potential",
        "calcium",
        "ca"
      ],
      [
        "fuse",
        "merge",
        "vesicle"
      ],
      [
        "release"
      ]
    ],
    "explanation": "Action potential arrives → calcium flows in → vesicles fuse with the membrane → neurotransmitter is released into the cleft.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-11",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 2 · What are the ways a neuron recovers from exocytosis?",
    "keyGroups": [
      [
        "reuptake",
        "transporter"
      ],
      [
        "enzyme",
        "break",
        "mao",
        "degrad"
      ],
      [
        "diffus",
        "recycl",
        "endocytosis"
      ]
    ],
    "explanation": "Reuptake by transporters, enzymatic breakdown (e.g., MAO), diffusion away, and recycling vesicle membrane.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-12",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 2 · What are the classes of neurotransmitters?",
    "keyGroups": [
      [
        "acetylcholine",
        "ach"
      ],
      [
        "monoamine",
        "dopamine",
        "serotonin"
      ],
      [
        "amino",
        "glutamate",
        "gaba"
      ],
      [
        "peptide",
        "endorphin"
      ],
      [
        "cannabinoid"
      ]
    ],
    "explanation": "Acetylcholine; monoamines (DA, NE, 5-HT); amino acids (glutamate, GABA); peptides; endocannabinoids.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-13",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 2 · What is the difference between physical and psychological dependency?",
    "keyGroups": [
      [
        "withdraw",
        "abstinen",
        "stop",
        "physical"
      ],
      [
        "crav",
        "desire",
        "seek",
        "want"
      ]
    ],
    "explanation": "Physical: abstinence syndrome when the drug stops (retrospective). Psychological: intense drug seeking from desire (e.g., cannabis).",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b2-14",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 2 · Define the factors “set” and “setting.”",
    "keyGroups": [
      [
        "expect",
        "mindset"
      ],
      [
        "environment",
        "place",
        "surround"
      ]
    ],
    "explanation": "Set = expectations. Setting = environment.",
    "tag": "Textbook Ch 2 review"
  },
  {
    "id": "psy-b3-1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 3 · Define “tolerance.”",
    "keyGroups": [
      [
        "less",
        "reduced",
        "more",
        "higher",
        "compensat",
        "weaker",
        "decreas"
      ]
    ],
    "explanation": "Compensatory response so the drug has less effect with repeated use; more is needed for the same effect.",
    "tag": "Textbook Ch 3 review"
  },
  {
    "id": "psy-b3-2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 3 · Define “metabolic tolerance.”",
    "keyGroups": [
      [
        "liver"
      ],
      [
        "enzyme",
        "faster",
        "more",
        "break"
      ]
    ],
    "explanation": "The liver makes more enzymes and clears the drug faster.",
    "tag": "Textbook Ch 3 review"
  },
  {
    "id": "psy-b3-3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 3 · Define “physiological” tolerance.",
    "keyGroups": [
      [
        "receptor",
        "cell",
        "neuron",
        "synapse",
        "sensitiv",
        "adapt",
        "brain"
      ]
    ],
    "explanation": "Cellular adaptation of the nervous system (like pharmacodynamic tolerance): changes in receptor number or sensitivity.",
    "tag": "Textbook Ch 3 review"
  },
  {
    "id": "psy-b3-4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 3 · Define “behavioral” tolerance.",
    "keyGroups": [
      [
        "practic",
        "learn",
        "train",
        "while"
      ]
    ],
    "explanation": "Practicing a behavior while on the drug improves it on the drug (treadmill rats).",
    "tag": "Textbook Ch 3 review"
  },
  {
    "id": "psy-b3-5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 3 · Define “learned” tolerance.",
    "keyGroups": [
      [
        "cue",
        "environment",
        "context",
        "room",
        "setting"
      ]
    ],
    "explanation": "Compensation triggered by environmental cues that predict the drug (morphine room; chemo rooms).",
    "tag": "Textbook Ch 3 review"
  },
  {
    "id": "psy-b3-6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 3 · What is the “abstinence syndrome”?",
    "keyGroups": [
      [
        "withdraw",
        "opposite",
        "stop"
      ]
    ],
    "explanation": "Medical term for withdrawal: responses opposite to the drug's effects when chronic use stops.",
    "tag": "Textbook Ch 3 review"
  },
  {
    "id": "psy-b4-1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 4 · According to Andrew Weil, what is the difference between set and setting?",
    "keyGroups": [
      [
        "expect",
        "mindset",
        "mind"
      ],
      [
        "environment",
        "place",
        "surround",
        "social",
        "physical"
      ]
    ],
    "explanation": "Set = the person's expectations and mindset. Setting = the physical and social environment.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 4 · Define “placebo.”",
    "keyGroups": [
      [
        "no",
        "inert",
        "sugar",
        "decept",
        "without",
        "psycholog",
        "fake"
      ]
    ],
    "explanation": "Traditionally, a substance with no pharmacological effect given to placate a patient. Effects are robust, so it isn't truly inert.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · Characterize what is meant by “voluntary” behavior.",
    "keyGroups": [
      [
        "conscious",
        "choose",
        "chose",
        "decid",
        "control",
        "intent"
      ]
    ],
    "explanation": "Consciously chosen behavior controlled by the frontal cortex; that same control can alter other brain circuits (the basis of placebo).",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · Describe one early demonstration of the placebo effect.",
    "keyGroups": [
      [
        "surgery",
        "heart",
        "angina",
        "beecher",
        "soldier",
        "war"
      ]
    ],
    "explanation": "“Surgery as Placebo” (1950s): sham heart surgery for angina worked; expectation drove recovery. Beecher's WWII observations are another.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · What did the arthroscopic knee surgery study contribute?",
    "keyGroups": [
      [
        "sham",
        "fake",
        "placebo"
      ],
      [
        "same",
        "equal",
        "as well",
        "improv",
        "just as"
      ]
    ],
    "explanation": "Sham knee surgery helped as much as real surgery, even years later: a procedure's benefit can be largely placebo.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-6",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · What two developments improved understanding of the placebo effect?",
    "keyGroups": [
      [
        "double blind",
        "blind",
        "controlled",
        "trial"
      ],
      [
        "imaging",
        "pet",
        "fmri",
        "scan"
      ]
    ],
    "explanation": "Double-blind placebo-controlled trials, and brain imaging (PET, fMRI).",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · Which two brain systems have been the focus of placebo mechanism studies?",
    "keyGroups": [
      [
        "reward",
        "reinforc",
        "dopamine",
        "vta",
        "accumbens"
      ],
      [
        "pain"
      ]
    ],
    "explanation": "The reward/reinforcement system and the pain-modulation system.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · What are the three principal brain areas of the midbrain reward system?",
    "keyGroups": [
      [
        "vta",
        "tegmental"
      ],
      [
        "accumbens"
      ],
      [
        "frontal",
        "prefrontal"
      ]
    ],
    "explanation": "VTA, nucleus accumbens, frontal cortex.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-9",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · Besides the frontal cortex and VTA, name two other inputs to the nucleus accumbens.",
    "keyGroups": [
      [
        "hippocamp"
      ],
      [
        "amygdala",
        "thalamus"
      ]
    ],
    "explanation": "Hippocampus and amygdala (thalamus also).",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-10",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · What is a possible role of dopamine in the nucleus accumbens?",
    "keyGroups": [
      [
        "reward",
        "expect",
        "motivat",
        "want",
        "crav",
        "predict",
        "pleasure"
      ]
    ],
    "explanation": "Signaling expected reward: motivation, wanting, craving.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-11",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · What is the significance of the frontal cortex in the placebo circuit?",
    "keyGroups": [
      [
        "expect",
        "belief",
        "thought",
        "conscious",
        "mind",
        "cognit"
      ],
      [
        "reward",
        "pain",
        "control",
        "alter",
        "change",
        "circuit"
      ]
    ],
    "explanation": "It handles expectation and conscious thought and projects to reward and pain circuits, so beliefs physically change brain activity.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-12",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · Name two neurotransmitter systems integrated in the nucleus accumbens.",
    "keyGroups": [
      [
        "dopamine"
      ],
      [
        "glutamate",
        "gaba",
        "opioid",
        "opiate",
        "endorphin"
      ]
    ],
    "explanation": "Dopamine and glutamate (GABA and endogenous opioids too).",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-13",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · Besides the frontal cortex, name two other cortical areas in the placebo effect.",
    "keyGroups": [
      [
        "cingulate"
      ],
      [
        "insula",
        "orbitofrontal"
      ]
    ],
    "explanation": "Anterior cingulate cortex and insula (orbitofrontal also cited). Check your book.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-14",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · What is the suspected cause of Parkinson's disease?",
    "keyGroups": [
      [
        "dopamine"
      ],
      [
        "nigra",
        "loss",
        "death",
        "die",
        "degenerat"
      ]
    ],
    "explanation": "Loss of dopamine neurons in the substantia nigra (nigrostriatal pathway).",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-15",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · Deep brain stimulation of what area relieves Parkinson's symptoms?",
    "keyGroups": [
      [
        "subthalamic",
        "pallidus",
        "stn"
      ]
    ],
    "explanation": "Subthalamic nucleus (globus pallidus is another target). Check your book.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-16",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · Increased release of what transmitter enhances relief of Parkinson's symptoms?",
    "answer": "dopamine",
    "acceptable": [
      "dopamine"
    ],
    "explanation": "Dopamine. Placebo can release dopamine in the striatum of Parkinson's patients.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-17",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · How would you explain placebo takers having changed brain patterns?",
    "keyGroups": [
      [
        "expect",
        "belief",
        "frontal",
        "mind"
      ],
      [
        "dopamine",
        "opioid",
        "chemical",
        "real",
        "physiolog",
        "circuit"
      ]
    ],
    "explanation": "Expectation from the frontal cortex drives real changes (dopamine, endogenous opioids) in reward and pain circuits.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-18",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · Name one limitation of using only cognitive therapy to change brain circuitry.",
    "keyGroups": [
      [
        "slow",
        "time",
        "effort",
        "hard",
        "motivat",
        "severe",
        "not everyone",
        "practice",
        "ability"
      ]
    ],
    "explanation": "It's slow and effortful, depends on ability and motivation, and may not be strong enough alone for severe conditions.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-19",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 4 · Define the “nocebo” effect.",
    "keyGroups": [
      [
        "negative",
        "bad",
        "harm",
        "side effect",
        "worse"
      ]
    ],
    "explanation": "Negative expectations causing real harmful effects or side effects.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-20",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · How does Gabapentin (Neurontin) relate to the ethics of placebo?",
    "keyGroups": [
      [
        "off label",
        "off-label",
        "placebo",
        "barely",
        "little",
        "not much",
        "no better"
      ]
    ],
    "explanation": "Widely prescribed off-label where it barely beats placebo, raising the question of whether that's more ethical than an honest placebo. Check your book.",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b4-21",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 4 · What issue does the Balanced Placebo design address?",
    "keyGroups": [
      [
        "expect",
        "told",
        "belief"
      ],
      [
        "drug",
        "pharmacolog",
        "separate",
        "effect"
      ]
    ],
    "explanation": "Separates drug effect from expectation: told drug/placebo × got drug/placebo (2 × 2).",
    "tag": "Textbook Ch 4 review"
  },
  {
    "id": "psy-b5-1",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Name the five types of sedative/hypnotic.",
    "keyGroups": [
      [
        "barbiturate"
      ],
      [
        "benzo"
      ],
      [
        "non barbiturate",
        "nonbarbiturate",
        "methaqualone",
        "meprobamate",
        "other"
      ],
      [
        "ethanol",
        "alcohol"
      ],
      [
        "cannabis",
        "marijuana"
      ]
    ],
    "explanation": "Barbiturates, benzodiazepines, other non-barbiturates, ethanol, cannabis (the table also lists antihistamines).",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 5 · Valium and alprazolam are examples of which sedative type?",
    "choices": [
      "Benzodiazepines",
      "Barbiturates",
      "Non-barbiturates",
      "Antihistamines"
    ],
    "answer": "Benzodiazepines",
    "explanation": "Benzodiazepines: Valium, Librium, triazolam, alprazolam. Barbiturates: phenobarbital, secobarbital.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-2b",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 5 · Phenobarbital and secobarbital are:",
    "choices": [
      "Barbiturates",
      "Benzodiazepines",
      "Stimulants",
      "Hydantoins"
    ],
    "answer": "Barbiturates",
    "explanation": "Barbiturates. Phenobarbital also appears as an anti-epilepsy drug.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 5 · Name one naturally occurring opiate.",
    "answer": "morphine",
    "acceptable": [
      "morphine",
      "codeine"
    ],
    "explanation": "Morphine or codeine.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-4",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Ch 5 · What is the difference between the two types of synthetic opiates?",
    "keyGroups": [
      [
        "semi",
        "modif",
        "derived",
        "from morphine",
        "natural"
      ],
      [
        "fully",
        "entirely",
        "lab",
        "complete"
      ]
    ],
    "explanation": "Semi-synthetic: chemically modified natural opiates (heroin from morphine). Fully synthetic: made entirely in the lab (methadone, Demerol).",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Which is a fully synthetic opiate?",
    "choices": [
      "Methadone",
      "Morphine",
      "Codeine",
      "Heroin"
    ],
    "answer": "Methadone",
    "explanation": "Methadone and Demerol are fully synthetic. Heroin is semi-synthetic (from morphine). Morphine and codeine are natural.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-6",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Name the five types of stimulants.",
    "keyGroups": [
      [
        "amphetamine"
      ],
      [
        "cocaine"
      ],
      [
        "xanthine",
        "caffeine"
      ],
      [
        "hyperactiv",
        "ritalin",
        "adhd"
      ],
      [
        "appetite",
        "phenylpropanolamine",
        "counter"
      ]
    ],
    "explanation": "Amphetamines, cocaine, methylxanthines, hyperactivity drugs, OTC appetite suppressants.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-7",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 5 · Caffeine, theophylline and theobromine are:",
    "choices": [
      "Methylxanthines",
      "Amphetamines",
      "Hydantoins",
      "Phenothiazines"
    ],
    "answer": "Methylxanthines",
    "explanation": "Methylxanthines, a stimulant type.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-8",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 5 · Name the two main classes of drugs used to treat mental disorders.",
    "keyGroups": [
      [
        "antidepress"
      ],
      [
        "antipsych",
        "neuroleptic",
        "schizo"
      ]
    ],
    "explanation": "Antidepressants and antipsychotics.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-9",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Name the antidepressant and antipsychotic subtypes.",
    "keyGroups": [
      [
        "tricyclic"
      ],
      [
        "heterocyclic",
        "hetero"
      ],
      [
        "mao",
        "monoamine oxidase"
      ],
      [
        "phenothiazine"
      ],
      [
        "butyrophenone"
      ]
    ],
    "explanation": "Antidepressants: tricyclics, heterocyclics, MAOIs. Antipsychotics: phenothiazines, butyrophenones.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-10a",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Haloperidol (Haldol) is a:",
    "choices": [
      "Butyrophenone",
      "Phenothiazine",
      "Tricyclic",
      "MAO inhibitor"
    ],
    "answer": "Butyrophenone",
    "explanation": "Butyrophenone antipsychotic. Phenothiazines: chlorpromazine (Thorazine), thioridazine (Mellaril).",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-10b",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Imipramine and amitriptyline are:",
    "choices": [
      "Tricyclic antidepressants",
      "Heterocyclic antidepressants",
      "MAO inhibitors",
      "Phenothiazines"
    ],
    "answer": "Tricyclic antidepressants",
    "explanation": "Tricyclics. Heterocyclics: fluoxetine (Prozac), trazodone. MAOI: tranylcypromine (Parnate).",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-10c",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Chlorpromazine (Thorazine) is a:",
    "choices": [
      "Phenothiazine",
      "Butyrophenone",
      "Heterocyclic",
      "Hydantoin"
    ],
    "answer": "Phenothiazine",
    "explanation": "Phenothiazine antipsychotic.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-10d",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Tranylcypromine (Parnate) is a:",
    "choices": [
      "MAO inhibitor",
      "Tricyclic",
      "Heterocyclic",
      "Benzodiazepine"
    ],
    "answer": "MAO inhibitor",
    "explanation": "Monoamine oxidase inhibitor.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-11",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · How are the types of hallucinogens different?",
    "keyGroups": [
      [
        "serotonin"
      ],
      [
        "norepinephrine",
        "noradrenaline"
      ],
      [
        "other",
        "neither"
      ]
    ],
    "explanation": "Grouped by structure: serotonin-like, norepinephrine-like, and other agents.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-12a",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · LSD and psilocin are hallucinogens structurally similar to:",
    "choices": [
      "Serotonin",
      "Norepinephrine",
      "Dopamine",
      "GABA"
    ],
    "answer": "Serotonin",
    "explanation": "Serotonin-like. Mescaline and MDMA are norepinephrine-like. Ibotenic acid and PCP are “other.”",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-12b",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Mescaline and MDMA are hallucinogens structurally similar to:",
    "choices": [
      "Norepinephrine",
      "Serotonin",
      "Acetylcholine",
      "Glutamate"
    ],
    "answer": "Norepinephrine",
    "explanation": "Norepinephrine-like.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-13",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Name the types of drugs used for anesthesia.",
    "keyGroups": [
      [
        "gas",
        "nitrous"
      ],
      [
        "volatile",
        "ether",
        "halothane"
      ],
      [
        "parenter",
        "inject",
        "ketamine",
        "barbiturate"
      ]
    ],
    "explanation": "Gaseous (nitrous oxide), volatile (ether, halothane), parenteral (barbiturates, ketamine).",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-14",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Name the types of drugs used to treat epilepsy.",
    "keyGroups": [
      [
        "hydantoin",
        "dilantin"
      ],
      [
        "barbiturate",
        "phenobarbital"
      ],
      [
        "carbamazepine",
        "carbomazepine"
      ],
      [
        "valpro"
      ]
    ],
    "explanation": "Hydantoins (Dilantin), barbiturates (phenobarbital), carbamazepine, valproic acid.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-15",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Ch 5 · What are the criteria for Schedule I?",
    "keyGroups": [
      [
        "abuse"
      ],
      [
        "no",
        "not"
      ],
      [
        "medical"
      ]
    ],
    "explanation": "High abuse potential, no accepted medical use, not accepted as safe under medical supervision.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-16",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · What are the criteria for Schedule II?",
    "keyGroups": [
      [
        "abuse"
      ],
      [
        "medical",
        "accepted"
      ]
    ],
    "explanation": "High abuse potential but an accepted medical use (often restricted); abuse can cause severe dependence.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-17",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · Which pair is Schedule I then Schedule II?",
    "choices": [
      "Heroin, then cocaine",
      "Cocaine, then heroin",
      "Alcohol, then caffeine",
      "Valium, then LSD"
    ],
    "answer": "Heroin, then cocaine",
    "explanation": "Schedule I: heroin, LSD, cannabis (federally), MDMA. Schedule II: cocaine, methamphetamine, morphine, fentanyl, Ritalin.",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-b5-18",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Ch 5 · What is the difference in criteria between Schedule III and IV?",
    "keyGroups": [
      [
        "moderate",
        "less than",
        "iii",
        "3"
      ],
      [
        "low",
        "limited",
        "iv",
        "4"
      ]
    ],
    "explanation": "III: abuse potential below I/II; moderate to low physical or high psychological dependence (ketamine, steroids). IV: low abuse potential relative to III, limited dependence (benzodiazepines).",
    "tag": "Textbook Ch 5 review"
  },
  {
    "id": "psy-pol1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which DEA schedule is for drugs with no accepted medical use and high abuse potential?",
    "choices": [
      "Schedule I",
      "Schedule II",
      "Schedule III",
      "Schedule V"
    ],
    "answer": "Schedule I",
    "explanation": "Schedules run from I (most restricted) to V (least). Schedule I means no accepted medical use plus high abuse potential.",
    "tag": "Drugs, medicine & policy"
  },
  {
    "id": "psy-pol2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Where does alcohol sit on the DEA schedules?",
    "choices": [
      "It isn’t scheduled",
      "Schedule I",
      "Schedule III",
      "Schedule V"
    ],
    "answer": "It isn’t scheduled",
    "explanation": "Alcohol isn’t scheduled, even though it tops the UK study for harm to others. Scheduling reflects history and familiarity, not only harm.",
    "tag": "Drugs, medicine & policy"
  },
  {
    "id": "psy-pol3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "In the UK harm study from lecture, which drug did the most harm to OTHERS?",
    "choices": [
      "Alcohol",
      "Heroin",
      "Cannabis",
      "LSD"
    ],
    "answer": "Alcohol",
    "explanation": "Alcohol led on harm to others. Heroin slightly outpaced it on harm to the user.",
    "tag": "Drugs, medicine & policy"
  },
  {
    "id": "psy-pol4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "According to lecture, why is cannabis Schedule I?",
    "keyGroups": [
      [
        "history",
        "reefer",
        "politic",
        "propaganda",
        "not safety",
        "stigma",
        "culture"
      ]
    ],
    "explanation": "Its status traces to history and propaganda like Reefer Madness, not a safety finding. Schedule I status also makes it very hard to research.",
    "tag": "Drugs, medicine & policy"
  },
  {
    "id": "psy-pol7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Name the three broad approaches to drug policy discussed in class.",
    "keyGroups": [
      [
        "legaliz",
        "legal"
      ],
      [
        "decriminaliz"
      ],
      [
        "prohibit",
        "criminaliz",
        "illegal",
        "ban",
        "war on drugs"
      ]
    ],
    "explanation": "Legalize (often regulated), decriminalize, or prohibit. US alcohol Prohibition is the case study for criminalizing a once-legal drug.",
    "tag": "Drugs, medicine & policy"
  },
  {
    "id": "psy-pol8",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why is it hard to define “drug” versus “medicine”?",
    "keyGroups": [
      [
        "overlap",
        "same",
        "connotation",
        "context",
        "depends",
        "all medicines",
        "every medicine",
        "use",
        "perception"
      ]
    ],
    "explanation": "Every medicine is a drug. The label mostly reflects connotation and context of use (helpful vs harmful), not chemistry. Even food alters mood.",
    "tag": "Drugs, medicine & policy"
  },
  {
    "id": "psy-in1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "What are the two general paths for getting a drug into the body?",
    "keyGroups": [
      [
        "enteral"
      ],
      [
        "parenteral"
      ]
    ],
    "explanation": "Enteral goes through the alimentary canal (GI tract). Parenteral is every other route.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in2",
    "type": "fill",
    "difficulty": "easy",
    "prompt": "Enteral administration goes through the ___.",
    "keyGroups": [
      [
        "alimentary",
        "gi",
        "gastro",
        "digestive",
        "gut",
        "stomach",
        "intestin"
      ]
    ],
    "explanation": "The alimentary canal, meaning the GI tract. A swallowed pill is the classic example.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which of these is NOT a parenteral route?",
    "choices": [
      "Swallowing a pill",
      "Intravenous",
      "Sublingual",
      "Intranasal"
    ],
    "answer": "Swallowing a pill",
    "explanation": "Oral is enteral. Parenteral includes IV, IM, subcutaneous, pulmonary, topical, sublingual, intranasal and cutaneous.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why does intranasal absorption work so well?",
    "keyGroups": [
      [
        "capillar",
        "blood vessel",
        "vascular"
      ]
    ],
    "explanation": "Nasal passages and sinuses are full of capillaries near the surface, so the drug reaches blood quickly.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in5",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Sublingual means the drug goes where?",
    "keyGroups": [
      [
        "tongue"
      ]
    ],
    "explanation": "Under the tongue, where lots of blood vessels sit close to the surface.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Define absorption.",
    "keyGroups": [
      [
        "time",
        "rate",
        "how long",
        "speed",
        "how fast"
      ],
      [
        "blood"
      ]
    ],
    "explanation": "The time it takes for a population of drug to enter the blood after administration.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in7",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Why is reaching the bloodstream the key step?",
    "keyGroups": [
      [
        "whole body",
        "entire body",
        "everywhere",
        "all over",
        "circulat",
        "every",
        "throughout",
        "all compartments"
      ]
    ],
    "explanation": "Once it’s in the blood, it reaches the whole body.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in8",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Roughly how long do most oral drugs take to approach peak blood concentration?",
    "choices": [
      "20–30 minutes",
      "2–3 minutes",
      "4–6 hours",
      "24 hours"
    ],
    "answer": "20–30 minutes",
    "explanation": "About 20–30 minutes, and some take longer.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in9",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why are edibles so unpredictable?",
    "keyGroups": [
      [
        "food",
        "stomach",
        "digest",
        "absorb",
        "absorption",
        "gi",
        "gut",
        "meal"
      ]
    ],
    "explanation": "Oral absorption of complex cannabinoid molecules varies a lot, especially with how much food is in the stomach.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in10",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why are gas anesthetics safer than pills for putting someone under for surgery?",
    "keyGroups": [
      [
        "fast",
        "quick",
        "rapid",
        "speed"
      ],
      [
        "control",
        "dose",
        "predict",
        "absorption",
        "vary"
      ]
    ],
    "explanation": "Inhaled drugs reach the brain fast and the dose stays controllable. Pill absorption varies, which makes the dose hard to control when the goal is very deep unconsciousness. Ketamine is an injectable exception with a wide safety margin.",
    "tag": "Getting in"
  },
  {
    "id": "psy-in11",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Skin patches use which route, and what’s the advantage?",
    "keyGroups": [
      [
        "skin",
        "transderm",
        "cutaneous",
        "topical"
      ],
      [
        "steady",
        "slow",
        "constant",
        "even",
        "stable",
        "consistent"
      ]
    ],
    "explanation": "Cutaneous (through the skin). Absorption is slow and steady.",
    "tag": "Getting in"
  },
  {
    "id": "psy-move1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "What is the primary force moving drugs through the body?",
    "keyGroups": [
      [
        "diffusion"
      ]
    ],
    "explanation": "Simple diffusion: molecules spread from high to low concentration. Blood flow stirs, diffusion moves drug into tissue.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move2",
    "type": "fill",
    "difficulty": "easy",
    "prompt": "Drugs diffuse from areas of ___ concentration to areas of ___ concentration.",
    "choices": [
      "high → low",
      "low → high",
      "any direction equally",
      "fat → blood only"
    ],
    "answer": "high → low",
    "explanation": "High to low. When tissue levels exceed blood levels, the flow reverses and drug leaks back into blood.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Where in the circulatory system do drugs leave the blood?",
    "keyGroups": [
      [
        "capillar"
      ]
    ],
    "explanation": "Capillaries. They have gaps between cells. Arteries and veins are sealed highways.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why is fat an important compartment in psychopharmacology?",
    "keyGroups": [
      [
        "lipid",
        "fat soluble",
        "lipophilic"
      ],
      [
        "store",
        "hold",
        "linger",
        "long",
        "half",
        "slow",
        "leak",
        "reservoir",
        "stay"
      ]
    ],
    "explanation": "Lipid-soluble drugs build up in fat and leak back into blood as blood levels fall. That lengthens their half-life.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move5",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why might a blood test not show whether a drug is still having an effect?",
    "keyGroups": [
      [
        "tissue",
        "fat",
        "stored",
        "compartment"
      ]
    ],
    "explanation": "Drug can linger in tissues like fat and slowly diffuse back into blood, so blood levels understate what’s still on board.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move6",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "To get INSIDE a cell, what must a drug cross, and what property helps?",
    "keyGroups": [
      [
        "lipid",
        "membrane",
        "bilayer",
        "fat"
      ],
      [
        "solub",
        "lipophilic",
        "dissolve"
      ]
    ],
    "explanation": "A lipid bilayer. Unless a specific transporter exists (uncommon), the drug needs lipid solubility.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Which blood protein carries fat-soluble molecules through the bloodstream?",
    "answer": "albumin",
    "acceptable": [
      "albumin"
    ],
    "explanation": "Albumin. Drugs bind it, travel, then hopefully let go at the right time.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What’s the most common side effect of SSRIs, and why?",
    "keyGroups": [
      [
        "gi",
        "gut",
        "gastro",
        "stomach",
        "nausea",
        "digest"
      ],
      [
        "serotonin",
        "5 times",
        "five times",
        "receptor"
      ]
    ],
    "explanation": "GI distress. There’s about 5× more serotonin in the gut than in the brain, so much of the binding happens there. An SSRI is mainly a gut drug that also acts on the brain.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move10",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Name the two components of the blood-brain barrier.",
    "keyGroups": [
      [
        "tight",
        "capillar"
      ],
      [
        "glia",
        "astrocyte"
      ]
    ],
    "explanation": "Brain capillaries with tight gaps, and glial cells wrapped around them.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move11",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "How many membranes does a molecule cross to get from blood into the brain?",
    "choices": [
      "4",
      "2",
      "1",
      "6"
    ],
    "answer": "4",
    "explanation": "Four. Two through the capillary cell (in and out) and two through the glial cell.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-move12",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why does the brain need a blood-brain barrier?",
    "keyGroups": [
      [
        "neuron",
        "toxin",
        "protect",
        "replace",
        "loss"
      ]
    ],
    "explanation": "Neurons are lost daily and not replaced, so the brain must be shielded from toxins. It’s also energy- and oxygen-hungry, so nutrients still need a way in.",
    "tag": "Distribution & the BBB"
  },
  {
    "id": "psy-out1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which two organs are mainly responsible for getting drugs out of the body?",
    "keyGroups": [
      [
        "liver",
        "hepat"
      ],
      [
        "kidney",
        "renal"
      ]
    ],
    "explanation": "The liver and kidneys working together.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why can’t the kidneys easily excrete highly lipid-soluble drugs?",
    "keyGroups": [
      [
        "urine",
        "water",
        "liquid"
      ]
    ],
    "explanation": "Urine is water-based, so it doesn’t readily carry lipid-soluble molecules.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What does the liver do to make a drug excretable?",
    "keyGroups": [
      [
        "transform",
        "metaboli",
        "break",
        "convert",
        "biotransform",
        "change"
      ],
      [
        "water",
        "less lipid",
        "less fat",
        "soluble"
      ]
    ],
    "explanation": "Biotransformation: it converts lipid-soluble drugs into less lipid-soluble forms the kidneys can excrete.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out4",
    "type": "fill",
    "difficulty": "easy",
    "prompt": "A breakdown product that still affects the brain is called an ___.",
    "answer": "active metabolite",
    "acceptable": [
      "active metabolite"
    ],
    "explanation": "An active metabolite.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Heroin breaks down into which active metabolite?",
    "choices": [
      "Morphine",
      "Fentanyl",
      "Naloxone",
      "Dopamine"
    ],
    "answer": "Morphine",
    "explanation": "Morphine, so effects can continue after the heroin itself is gone.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which family of liver enzymes metabolizes most drugs?",
    "keyGroups": [
      [
        "p450",
        "p 450",
        "cyp",
        "cytochrome"
      ]
    ],
    "explanation": "Cytochrome P450 (CYP). About 90% of drugs are handled by six of these enzymes.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "About what percent of people are “extensive” (typical) CYP metabolizers?",
    "choices": [
      "78%",
      "10%",
      "2%",
      "50%"
    ],
    "answer": "78%",
    "explanation": "Poor ~10%, intermediate ~10%, extensive ~78%, ultra-rapid ~2%. Same dose, very different blood levels.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Name the four CYP metabolizer categories.",
    "keyGroups": [
      [
        "poor"
      ],
      [
        "intermediate"
      ],
      [
        "extensive"
      ],
      [
        "ultra",
        "rapid"
      ]
    ],
    "explanation": "Poor, intermediate, extensive, ultra-rapid.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out9",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Besides the liver and kidneys, name the three other ways drugs leave the body.",
    "keyGroups": [
      [
        "lung",
        "breath",
        "exhal"
      ],
      [
        "bile"
      ],
      [
        "sweat",
        "milk",
        "breast"
      ]
    ],
    "explanation": "Lungs (gas anesthetics), bile (into the intestines), and fluids like sweat and breast milk.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out10",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Define half-life.",
    "keyGroups": [
      [
        "half"
      ],
      [
        "time",
        "how long"
      ]
    ],
    "explanation": "The time it takes to clear half of an initial dose from the blood.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out11",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "About how many half-lives clear ~94% of a drug?",
    "choices": [
      "4",
      "2",
      "10",
      "1"
    ],
    "answer": "4",
    "explanation": "Four: 100 → 50 → 25 → 12.5 → 6.2% left.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out12",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "What does an MAOI do, and what is the “cheese reaction”?",
    "keyGroups": [
      [
        "break",
        "monoamine oxidase",
        "enzyme",
        "block",
        "inhibit",
        "prevent"
      ],
      [
        "cheese",
        "food",
        "tyramine",
        "heart",
        "blood pressure",
        "too much",
        "build"
      ]
    ],
    "explanation": "Monoamine oxidase breaks down serotonin, dopamine and norepinephrine. MAOIs block it, which is how they work as antidepressants. Gut MAO also clears monoamines from food, so on an MAOI those build up after foods like aged cheese, spiking heart rate and blood pressure.",
    "tag": "Getting out"
  },
  {
    "id": "psy-out13",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why does half-life matter for a drug taken every day?",
    "keyGroups": [
      [
        "accumul",
        "build",
        "left over",
        "leftover",
        "remain",
        "stack",
        "toxic"
      ]
    ],
    "explanation": "If the last dose isn’t cleared, drug accumulates. Sometimes that’s used on purpose to ramp up; sometimes it causes accidental toxicity.",
    "tag": "Getting out"
  },
  {
    "id": "psy-rec1",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What two criteria make a protein a drug receptor?",
    "keyGroups": [
      [
        "bind"
      ],
      [
        "alter",
        "change",
        "physiolog",
        "effect",
        "event"
      ]
    ],
    "explanation": "The drug binds to it, and the bound drug alters a normally occurring physiological event.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Name the three common types of drug receptors.",
    "keyGroups": [
      [
        "neurotransmitter"
      ],
      [
        "enzyme"
      ],
      [
        "transport",
        "reuptake"
      ]
    ],
    "explanation": "Neurotransmitter receptors, enzymes, and membrane transport mechanisms like reuptake transporters.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "A drug that mimics or enhances a neurotransmitter’s normal action is an:",
    "choices": [
      "Agonist",
      "Antagonist",
      "Enzyme",
      "Metabolite"
    ],
    "answer": "Agonist",
    "explanation": "Agonist: a hairpin that also opens the lock. An antagonist blocks the lock.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec4",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Narcan (naloxone) reverses an opioid overdose. What kind of drug is it?",
    "choices": [
      "Opioid receptor antagonist",
      "Opioid agonist",
      "Reuptake inhibitor",
      "MAO inhibitor"
    ],
    "answer": "Opioid receptor antagonist",
    "explanation": "An antagonist that outcompetes opioids for the receptor and knocks them off.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec5",
    "type": "fill",
    "difficulty": "easy",
    "prompt": "Finish the prof’s line: “Side effects are just ___.”",
    "answer": "effects",
    "acceptable": [
      "effects"
    ],
    "explanation": "Effects. The molecule binds whatever it can; we just label the unwanted results “side” effects.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec6",
    "type": "fill",
    "difficulty": "medium",
    "prompt": "“The only clean drugs are ___ drugs.” Fill the blank.",
    "answer": "new",
    "acceptable": [
      "new"
    ],
    "explanation": "New. A drug only looks clean until we discover everything else it binds to.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec7",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why do antipsychotics often cause motor side effects?",
    "keyGroups": [
      [
        "dopamine"
      ],
      [
        "motor",
        "movement",
        "nigro",
        "basal",
        "striat",
        "face",
        "facial"
      ]
    ],
    "explanation": "Dopamine receptors drive motivation in the nucleus accumbens but also control movement in motor circuits. A dopamine drug hits both. A drug never has a single effect, even at one receptor type.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-rec8",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why can’t we make an opioid that relieves pain without slowing breathing?",
    "keyGroups": [
      [
        "same",
        "both",
        "share"
      ],
      [
        "receptor",
        "brainstem",
        "respirat",
        "breath"
      ]
    ],
    "explanation": "The same receptors handle pain relief and respiration in the brainstem. It’s all one brain compartment, and the molecule binds wherever it can.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-dose1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "As dose increases, what happens on a dose-response curve?",
    "choices": [
      "Effect rises, then plateaus",
      "Effect rises forever",
      "Effect stays flat",
      "Effect drops right away"
    ],
    "answer": "Effect rises, then plateaus",
    "explanation": "More molecules bind more receptors until receptors or the behavior max out.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why does a dose-response curve plateau?",
    "keyGroups": [
      [
        "receptor",
        "limit",
        "max",
        "bound",
        "all",
        "ceiling"
      ]
    ],
    "explanation": "There’s a limited number of receptors, and the behavior itself has a ceiling (a rat can only run so fast).",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "What does ED50 mean?",
    "keyGroups": [
      [
        "dose"
      ],
      [
        "50",
        "half"
      ]
    ],
    "explanation": "The effective dose at which 50% of the population shows the effect.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "ED95 is the dose at which:",
    "choices": [
      "95% of subjects show the effect",
      "One person reaches 95% of max effect",
      "95% of subjects die",
      "95% of the drug is cleared"
    ],
    "answer": "95% of subjects show the effect",
    "explanation": "The subscript is the percent of subjects showing that effect.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose5",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which formula gives the therapeutic index?",
    "choices": [
      "LD50 ÷ ED50",
      "ED50 ÷ LD50",
      "LD50 − ED50",
      "LD50 × ED50"
    ],
    "answer": "LD50 ÷ ED50",
    "explanation": "TI = LD50 ÷ ED50. A bigger number means a safer drug.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Drug A has a TI of 4. Drug B has a TI of 100. Which is safer?",
    "choices": [
      "Drug B",
      "Drug A",
      "They’re equally safe",
      "Can’t tell"
    ],
    "answer": "Drug B",
    "explanation": "Higher TI means a wider gap between the effective and lethal doses.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose7",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why can a drug have more than one therapeutic index?",
    "keyGroups": [
      [
        "effect",
        "curve"
      ]
    ],
    "explanation": "Every effect has its own dose-response curve. An ADHD med has a TI for heart palpitations as well as for death.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "How are lethal dose curves usually determined?",
    "keyGroups": [
      [
        "animal",
        "rat",
        "mice",
        "mouse"
      ]
    ],
    "explanation": "Animal research. The prof’s point: every approved drug relies on it.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose9",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Which plot did the prof call more useful for reading ED values?",
    "choices": [
      "Cumulative percent of subjects",
      "Frequency distribution",
      "Half-life decay curve",
      "Bar chart of side effects"
    ],
    "answer": "Cumulative percent of subjects",
    "explanation": "The cumulative plot climbs to 100%, so you read across from 50% and down to the dose.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-dose10",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why is choosing a dose called an “art” as much as a science?",
    "keyGroups": [
      [
        "individual",
        "differ",
        "sensitive",
        "resistant",
        "variab",
        "experience",
        "people",
        "everyone"
      ]
    ],
    "explanation": "People differ in sensitivity and metabolism. Some get unwanted effects before the wanted one. Prescribers lean on experience, which can be good or bad.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-brain1",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Name the three developmental divisions of the brain.",
    "keyGroups": [
      [
        "forebrain",
        "prosencephalon",
        "telencephalon"
      ],
      [
        "midbrain",
        "mesencephalon"
      ],
      [
        "hindbrain",
        "rhombencephalon",
        "metencephalon",
        "myelencephalon"
      ]
    ],
    "explanation": "Forebrain (telencephalon, diencephalon), midbrain (mesencephalon), hindbrain (metencephalon, myelencephalon).",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which system is most associated with regulating emotion?",
    "choices": [
      "Limbic system",
      "Nigrostriatal system",
      "Medial forebrain bundle",
      "Cerebellum"
    ],
    "answer": "Limbic system",
    "explanation": "The limbic system, a set of interconnected nuclei. It isn’t strictly one circuit.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain3",
    "type": "fill",
    "difficulty": "medium",
    "prompt": "The nigrostriatal system connects the substantia nigra to the ___.",
    "keyGroups": [
      [
        "basal ganglia",
        "striatum"
      ]
    ],
    "explanation": "The basal ganglia. It helps coordinate behavior and choices.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "The medial forebrain bundle is responsible for:",
    "choices": [
      "Arousal and reinforcement",
      "Breathing rhythm",
      "Visual processing",
      "Hearing"
    ],
    "answer": "Arousal and reinforcement",
    "explanation": "It’s a big axon bundle rising from the mid/hindbrain and projecting throughout the brain.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "The VTA → nucleus accumbens pathway is now thought to be the locus of what?",
    "keyGroups": [
      [
        "crav",
        "want",
        "liking",
        "like"
      ]
    ],
    "explanation": "“Craving”, “liking” and “wanting” drugs. It was originally thought to be the reinforcement center.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain6",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "What happens at a synapse?",
    "keyGroups": [
      [
        "neurotransmitter",
        "release",
        "communicat",
        "signal"
      ]
    ],
    "explanation": "A neuron releases neurotransmitter onto receptors of its target, which excites or inhibits that cell.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain7",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Acetylcholine’s key roles include:",
    "choices": [
      "Arousal, learning, memory and attention",
      "Pain relief only",
      "Inhibiting all neurons",
      "Storing fat"
    ],
    "answer": "Arousal, learning, memory and attention",
    "explanation": "ACh: arousal, learning and memory, sustained attention.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain8",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Name the three monoamines.",
    "keyGroups": [
      [
        "dopamine"
      ],
      [
        "serotonin",
        "5 ht",
        "5ht"
      ],
      [
        "norepinephrine",
        "noradrenaline",
        "epinephrine"
      ]
    ],
    "explanation": "Dopamine, norepinephrine, serotonin.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain9",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "The main excitatory and inhibitory amino acid transmitters are:",
    "choices": [
      "Glutamate excites, GABA inhibits",
      "GABA excites, glutamate inhibits",
      "Dopamine and serotonin",
      "ACh and endorphin"
    ],
    "answer": "Glutamate excites, GABA inhibits",
    "explanation": "Glutamate is the main excitatory transmitter; GABA is the main inhibitory one.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain10",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Name the five neurotransmitter classes from lecture.",
    "keyGroups": [
      [
        "acetylcholine",
        "ach"
      ],
      [
        "monoamine"
      ],
      [
        "amino"
      ],
      [
        "peptide"
      ],
      [
        "cannabinoid"
      ]
    ],
    "explanation": "Acetylcholine, monoamines, amino acids, peptides, endocannabinoids.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-brain11",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why isn’t substance dependence a “one area, one transmitter” thing?",
    "keyGroups": [
      [
        "circuit",
        "many",
        "network",
        "whole",
        "multiple",
        "dopamine",
        "gaba",
        "glutamate",
        "limbic"
      ]
    ],
    "explanation": "The VTA–accumbens pathway sits in a big limbic circuit (frontal cortex, hippocampus, amygdala, thalamus) using dopamine, GABA, glutamate, ACh and endogenous opioids.",
    "tag": "Brain systems & transmitters"
  },
  {
    "id": "psy-tol1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "In one line, what is tolerance?",
    "keyGroups": [
      [
        "less",
        "reduced",
        "decrease",
        "more",
        "higher",
        "same effect",
        "compensat",
        "weaker"
      ]
    ],
    "explanation": "A reduced effect with repeated use, so more drug is needed for the same effect. The system is compensating to restore equilibrium.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Where does metabolic tolerance happen, and how?",
    "keyGroups": [
      [
        "liver"
      ],
      [
        "enzyme",
        "faster",
        "more",
        "break"
      ]
    ],
    "explanation": "The liver ramps up its enzymes, so the drug is broken down faster.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What changes in pharmacodynamic tolerance?",
    "keyGroups": [
      [
        "receptor",
        "synapse",
        "brain",
        "sensitiv"
      ]
    ],
    "explanation": "The brain adjusts, for example changing the number of receptors available at the synapse.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Describe the treadmill experiment for behavioral tolerance.",
    "keyGroups": [
      [
        "practic",
        "train",
        "during",
        "while"
      ],
      [
        "drunk",
        "alcohol",
        "intoxicat",
        "booze"
      ]
    ],
    "explanation": "Rats that practiced on the treadmill while drunk got better at it while drunk. Rats given alcohol after practice didn’t. Same alcohol exposure, so it isn’t metabolic: practice under the drug is what matters.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Define learned tolerance.",
    "keyGroups": [
      [
        "cue",
        "environment",
        "context",
        "setting",
        "room",
        "place"
      ]
    ],
    "explanation": "Compensatory responses set off by environmental cues that predict the drug.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol6",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Rats got morphine in Room A and saline in Room B on alternating days. On test day, which showed the MOST sedation?",
    "choices": [
      "Morphine given in Room B",
      "Morphine given in Room A",
      "Saline given in Room A",
      "Both morphine groups equally"
    ],
    "answer": "Morphine given in Room B",
    "explanation": "In the familiar morphine room the body braced for the drug, so sedation was smaller. In the saline room there was no anticipatory compensation, so the same dose hit harder. This is why context matters for overdose risk.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What medical example of learned tolerance did the prof give?",
    "keyGroups": [
      [
        "chemo"
      ]
    ],
    "explanation": "Chemotherapy. Patients react to treatment-room cues, so clinics make those rooms pleasant with gardens and windows.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-tol8",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why does the body build tolerance at all?",
    "keyGroups": [
      [
        "equilibrium",
        "homeostasis",
        "balance",
        "compensat",
        "normal"
      ]
    ],
    "explanation": "The body constantly seeks equilibrium. It doesn’t know you want the drug’s effect, only that something knocked it off balance.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-wd1",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why are withdrawal symptoms usually the opposite of the drug’s effects?",
    "keyGroups": [
      [
        "equilibrium",
        "compensat",
        "adapt",
        "homeostasis",
        "balance"
      ]
    ],
    "explanation": "Chronic use builds a compensatory response and a new equilibrium. Remove the drug and the compensation is left unopposed, so you swing the other way.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-wd2",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Alcohol is a sedative. Alcohol withdrawal is therefore marked by:",
    "choices": [
      "Overactivation",
      "More sedation",
      "No change",
      "Calm euphoria"
    ],
    "answer": "Overactivation",
    "explanation": "The body was pushing activation up to offset the sedative. Without the sedative, it overshoots.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-wd3",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "What is the more medical term for withdrawal?",
    "answer": "abstinence syndrome",
    "acceptable": [
      "abstinence syndrome"
    ],
    "explanation": "Abstinence syndrome: a constellation of responses opposite to the drug’s effects.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-wd4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why is physical dependence called a “retrospective observation”?",
    "keyGroups": [
      [
        "stop",
        "halt",
        "after",
        "abstinen",
        "withdraw",
        "take away",
        "remove",
        "quit"
      ]
    ],
    "explanation": "You only know someone was physically dependent after the drug stops and an abstinence syndrome appears.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-wd5",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What is psychological dependence, and which drug is the classic example?",
    "keyGroups": [
      [
        "crav",
        "desire",
        "seek",
        "want"
      ],
      [
        "cannabis",
        "marijuana",
        "weed"
      ]
    ],
    "explanation": "An ill-defined term for intense drug seeking from a keen desire for the drug. Cannabis: strong cravings, unclear physical abstinence syndrome.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-wd6",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "By the lecture’s definition, is the prof physically dependent on caffeine?",
    "choices": [
      "No, stopping causes them no withdrawal",
      "Yes, they drink a lot",
      "Yes, caffeine always causes dependence",
      "It can’t be determined"
    ],
    "answer": "No, stopping causes them no withdrawal",
    "explanation": "Dependence is defined by what happens when you stop, not by how much you use.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-wd7",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Which commonly prescribed drug classes are increasingly recognized to have an abstinence syndrome?",
    "keyGroups": [
      [
        "adhd",
        "stimul"
      ],
      [
        "antidepress",
        "ssri"
      ],
      [
        "anxi",
        "benzo"
      ]
    ],
    "explanation": "ADHD medications, antidepressants and anxiolytics, among others.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-add1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Which substance can’t be diagnosed as a substance use disorder in DSM-5?",
    "answer": "caffeine",
    "acceptable": [
      "caffeine",
      "coffee"
    ],
    "explanation": "Caffeine.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What’s the minimum number of symptoms for a DSM-5 substance use disorder?",
    "choices": [
      "2",
      "1",
      "4",
      "6"
    ],
    "answer": "2",
    "explanation": "2–3 mild, 4–5 moderate, 6 or more severe.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Four or five DSM-5 symptoms means the disorder is:",
    "choices": [
      "Moderate",
      "Mild",
      "Severe",
      "Not a disorder"
    ],
    "answer": "Moderate",
    "explanation": "2–3 mild, 4–5 moderate, 6+ severe.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "How did DSM-IV differ from DSM-5 for alcohol?",
    "keyGroups": [
      [
        "abuse"
      ],
      [
        "dependen"
      ]
    ],
    "explanation": "DSM-IV split alcohol abuse from alcohol dependence. DSM-5 merged them into one use disorder rated mild, moderate or severe.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add5",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "What did the prof say is conspicuously missing from the DSM criteria?",
    "keyGroups": [
      [
        "biolog",
        "physiolog",
        "brain"
      ]
    ],
    "explanation": "Biology. The criteria are almost all social and psychological.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add6",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Why might someone prefer “substance use disorder” to “addiction”?",
    "keyGroups": [
      [
        "moral",
        "judg",
        "stigma",
        "negative"
      ]
    ],
    "explanation": "“Addiction” carries moral judgment. It is broader, though: you can be addicted to gambling.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add7",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Give the two lecture definitions of addiction.",
    "keyGroups": [
      [
        "behavior",
        "pattern",
        "compulsive"
      ],
      [
        "disease",
        "neurobiolog",
        "chronic"
      ]
    ],
    "explanation": "1) A behavioral pattern of compulsive use or over-involvement, with a tendency to relapse. 2) A primary chronic neurobiologic disease with genetic, psychosocial and environmental factors.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-add8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "List the four behaviors in the “disease” definition of addiction.",
    "keyGroups": [
      [
        "control"
      ],
      [
        "compulsive"
      ],
      [
        "harm",
        "despite"
      ],
      [
        "crav"
      ]
    ],
    "explanation": "Impaired control, compulsive use, continued use despite harm, craving.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-plac1",
    "type": "recall",
    "difficulty": "easy",
    "prompt": "Define “set” and “setting”.",
    "keyGroups": [
      [
        "expect",
        "mindset",
        "belief"
      ],
      [
        "environment",
        "place",
        "surround",
        "context"
      ]
    ],
    "explanation": "Set is the user’s expectations. Setting is the immediate environment.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac2",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "Give the prof’s stimulant example of set and setting.",
    "keyGroups": [
      [
        "class",
        "study",
        "focus",
        "school"
      ],
      [
        "party",
        "fun",
        "social"
      ]
    ],
    "explanation": "Before class a stimulant helps focus. Before a party it helps people have a good time. Same drug, different expectation and environment.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac3",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What is drug sensitization?",
    "keyGroups": [
      [
        "increas",
        "greater",
        "more",
        "stronger",
        "bigger"
      ]
    ],
    "explanation": "Repeated exposure (amphetamine, cocaine) makes the drug’s effect bigger over time.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac4",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "How long can sensitization last?",
    "choices": [
      "A year or more",
      "A few hours",
      "One day",
      "Exactly one week"
    ],
    "answer": "A year or more",
    "explanation": "That duration means its mechanism differs from short-lived tolerance and withdrawal.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac5",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Why does sensitization matter for relapse?",
    "keyGroups": [
      [
        "cue",
        "trigger",
        "crav",
        "sensitiv"
      ]
    ],
    "explanation": "Long-lasting sensitization helps explain heightened reactions to drug-related cues, which drives craving and relapse.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac6",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Can someone have tolerance and sensitization to the same drug?",
    "keyGroups": [
      [
        "yes",
        "both",
        "some effects",
        "different"
      ]
    ],
    "explanation": "Yes. With stimulants you can grow tolerant to some effects and sensitized to others.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac7",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What’s the traditional definition of a placebo, and why does the prof push back?",
    "keyGroups": [
      [
        "no",
        "inert",
        "sugar",
        "decept",
        "lie",
        "fake"
      ],
      [
        "robust",
        "real",
        "effect",
        "work",
        "not inert"
      ]
    ],
    "explanation": "Traditionally a substance with no physiological effect, given to placate a patient. But placebo effects are robust, so it can’t be inert, and it can be used ethically.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac8",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What did the 1950s “Surgery as Placebo” heart study find?",
    "keyGroups": [
      [
        "expect",
        "believ"
      ],
      [
        "recover",
        "improv",
        "heal",
        "work",
        "better"
      ]
    ],
    "explanation": "Patients’ expectation of success drove their recovery from heart surgery.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac9",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "In 1990s FDA trials for five antidepressants, what share found the drug beat placebo on ALL depression measures?",
    "choices": [
      "14%",
      "50%",
      "80%",
      "95%"
    ],
    "answer": "14%",
    "explanation": "Only 14%. Paxil needed nine trials to get two showing a difference.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac10",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What is the number needed to treat (NNT)?",
    "keyGroups": [
      [
        "number",
        "how many"
      ],
      [
        "patient",
        "people"
      ]
    ],
    "explanation": "How many patients must take a drug for one to benefit beyond the placebo effect. It’s high for psychiatric meds.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac11",
    "type": "recall",
    "difficulty": "hard",
    "prompt": "Which brain region is common to both placebo pathways, and what are the two pathways?",
    "keyGroups": [
      [
        "frontal"
      ],
      [
        "reward",
        "reinforce",
        "vta",
        "accumbens",
        "dopamine"
      ],
      [
        "pain"
      ]
    ],
    "explanation": "Frontal cortex. It projects to the reinforcement circuit (VTA, nucleus accumbens) and down to pain-modulating structures.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-plac12",
    "type": "recall",
    "difficulty": "medium",
    "prompt": "What study design controls for placebo effects?",
    "keyGroups": [
      [
        "double blind",
        "blind"
      ],
      [
        "placebo",
        "control"
      ]
    ],
    "explanation": "Double-blind, placebo-controlled trials.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-e1",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Trace an oral pill from swallowing to excretion. How does it get to the brain, and how does it leave?",
    "points": [
      {
        "p": "Enteral route through the alimentary canal",
        "k": [
          "enteral",
          "alimentary",
          "gi",
          "stomach",
          "gut"
        ]
      },
      {
        "p": "Absorption into blood takes ~20–30 min and varies (food)",
        "k": [
          "absor",
          "20",
          "30",
          "minute"
        ]
      },
      {
        "p": "Diffusion moves drug high → low concentration",
        "k": [
          "diffus",
          "concentration"
        ]
      },
      {
        "p": "Leaves blood through leaky capillaries into compartments",
        "k": [
          "capillar",
          "compartment",
          "tissue"
        ]
      },
      {
        "p": "Lipid-soluble drug stores in fat, lengthening half-life",
        "k": [
          "fat",
          "lipid"
        ]
      },
      {
        "p": "BBB: tight capillaries + glial cells, 4 membranes",
        "k": [
          "blood brain",
          "bbb",
          "glia",
          "tight",
          "membrane"
        ]
      },
      {
        "p": "Liver biotransforms via CYP450; active metabolites possible",
        "k": [
          "liver",
          "cyp",
          "p450",
          "metabol",
          "biotransform"
        ]
      },
      {
        "p": "Kidneys excrete the now water-soluble form in urine",
        "k": [
          "kidney",
          "urine"
        ]
      },
      {
        "p": "Half-life: 4 half-lives clear ~94%",
        "k": [
          "half",
          "94"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Getting out"
  },
  {
    "id": "psy-e2",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Why does a drug never have just one effect? Use examples.",
    "points": [
      {
        "p": "A drug binds every receptor that recognizes it",
        "k": [
          "bind",
          "every",
          "all receptor",
          "wherever"
        ]
      },
      {
        "p": "Receptors exist inside and outside the CNS",
        "k": [
          "outside",
          "inside",
          "cns",
          "body"
        ]
      },
      {
        "p": "SSRIs: ~5× more serotonin in the gut, so GI effects",
        "k": [
          "ssri",
          "gut",
          "gi",
          "serotonin"
        ]
      },
      {
        "p": "Same receptor in different circuits: dopamine motivation vs motor",
        "k": [
          "dopamine",
          "motor",
          "accumbens",
          "antipsych"
        ]
      },
      {
        "p": "Opioids: pain relief plus breathing suppression",
        "k": [
          "opioid",
          "opiate",
          "breath",
          "respirat"
        ]
      },
      {
        "p": "“Side effects are just effects”",
        "k": [
          "side effect",
          "just effect"
        ]
      },
      {
        "p": "Only clean drugs are new drugs",
        "k": [
          "clean",
          "new drug"
        ]
      },
      {
        "p": "Each effect has its own dose-response curve and TI",
        "k": [
          "curve",
          "index",
          "ti"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Receptors & effects"
  },
  {
    "id": "psy-e3",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Using evidence from class, argue that pharmacology alone can’t explain a drug’s behavioral effects.",
    "points": [
      {
        "p": "Behavioral tolerance: treadmill rats practicing while drunk",
        "k": [
          "treadmill",
          "behavioral toler",
          "practic"
        ]
      },
      {
        "p": "Learned tolerance: morphine room vs saline room",
        "k": [
          "room",
          "learned",
          "context",
          "cue"
        ]
      },
      {
        "p": "Chemo-room cues trigger responses",
        "k": [
          "chemo"
        ]
      },
      {
        "p": "Set & setting: stimulant in class vs at a party",
        "k": [
          "set",
          "setting",
          "party",
          "class"
        ]
      },
      {
        "p": "Placebo surgery (Surgery as Placebo; knee/back)",
        "k": [
          "placebo",
          "surgery",
          "sham"
        ]
      },
      {
        "p": "Antidepressant trials: 14%; Paxil 9 trials for 2",
        "k": [
          "14",
          "paxil",
          "trial"
        ]
      },
      {
        "p": "Sensitization lasts a year or more",
        "k": [
          "sensiti"
        ]
      },
      {
        "p": "Closing point: expectation and context are real, physical effects",
        "k": [
          "expect",
          "real",
          "context"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-e4",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Compare the four types of tolerance, with an example of each.",
    "points": [
      {
        "p": "Metabolic: liver makes more enzymes, faster clearance",
        "k": [
          "metabolic",
          "liver",
          "enzyme"
        ]
      },
      {
        "p": "Pharmacodynamic: receptor changes at the synapse",
        "k": [
          "pharmacodynamic",
          "receptor",
          "synapse"
        ]
      },
      {
        "p": "Behavioral: practice under the drug (treadmill)",
        "k": [
          "behavioral",
          "treadmill",
          "practic"
        ]
      },
      {
        "p": "Learned: cues trigger compensation (morphine rooms)",
        "k": [
          "learned",
          "cue",
          "room",
          "context"
        ]
      },
      {
        "p": "All are compensation to restore equilibrium",
        "k": [
          "equilibrium",
          "compensat",
          "homeostasis"
        ]
      },
      {
        "p": "Consequence: dose escalation, or a familiar dose hits harder in a new context",
        "k": [
          "escalat",
          "higher dose",
          "more drug",
          "overdose",
          "new context"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Tolerance"
  },
  {
    "id": "psy-e5",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "What is withdrawal, and why are its symptoms usually the opposite of the drug’s effects?",
    "points": [
      {
        "p": "Repeated use builds a compensatory response",
        "k": [
          "compensat",
          "repeat",
          "chronic"
        ]
      },
      {
        "p": "The body sets a new equilibrium",
        "k": [
          "equilibrium",
          "homeostasis"
        ]
      },
      {
        "p": "Stopping leaves the compensation unopposed → opposite effects",
        "k": [
          "opposite",
          "stop",
          "unopposed",
          "overshoot"
        ]
      },
      {
        "p": "Example: alcohol (sedative) withdrawal = overactivation",
        "k": [
          "alcohol",
          "sedat",
          "overactiv"
        ]
      },
      {
        "p": "“Abstinence syndrome” is the medical term",
        "k": [
          "abstinence"
        ]
      },
      {
        "p": "Physical dependence is retrospective",
        "k": [
          "retrospect",
          "physical depend"
        ]
      },
      {
        "p": "Psychological dependence is ill-defined (cannabis)",
        "k": [
          "psychological",
          "cannabis",
          "crav"
        ]
      },
      {
        "p": "Seen with ADHD meds, antidepressants, anxiolytics",
        "k": [
          "adhd",
          "antidepress",
          "anxi"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Withdrawal & dependence"
  },
  {
    "id": "psy-e6",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "What is addiction? Discuss the DSM-5 and the two definitions from class.",
    "points": [
      {
        "p": "DSM-5: a separate use disorder per substance",
        "k": [
          "dsm",
          "use disorder"
        ]
      },
      {
        "p": "Caffeine can’t be diagnosed",
        "k": [
          "caffeine"
        ]
      },
      {
        "p": "≥2 symptoms; 2–3 mild, 4–5 moderate, 6+ severe",
        "k": [
          "mild",
          "moderate",
          "severe"
        ]
      },
      {
        "p": "DSM-IV split abuse vs dependence",
        "k": [
          "dsm iv",
          "dsm 4",
          "abuse"
        ]
      },
      {
        "p": "Criteria are mostly social/psychological, little biology",
        "k": [
          "biolog",
          "social"
        ]
      },
      {
        "p": "Behavioral-pattern definition with relapse",
        "k": [
          "pattern",
          "relapse",
          "compulsive"
        ]
      },
      {
        "p": "Chronic neurobiologic disease definition",
        "k": [
          "disease",
          "neurobiolog",
          "chronic"
        ]
      },
      {
        "p": "“Addiction” is broader and carries moral judgment (gambling)",
        "k": [
          "gambl",
          "moral",
          "stigma"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Addiction & SUD"
  },
  {
    "id": "psy-e7",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Is a placebo a “lie”? Discuss the evidence.",
    "points": [
      {
        "p": "Traditional definition: inert, given to placate",
        "k": [
          "inert",
          "placate",
          "decept",
          "sugar"
        ]
      },
      {
        "p": "Set (expectation) and setting drive real effects",
        "k": [
          "set",
          "setting",
          "expect"
        ]
      },
      {
        "p": "Surgery as Placebo (1950s heart surgery)",
        "k": [
          "surgery",
          "heart",
          "angina"
        ]
      },
      {
        "p": "Sham knee/back surgeries match real ones",
        "k": [
          "knee",
          "back",
          "sham"
        ]
      },
      {
        "p": "Antidepressant trials: 14% beat placebo on all measures",
        "k": [
          "14",
          "antidepress",
          "paxil"
        ]
      },
      {
        "p": "NNT is high for psychiatric meds",
        "k": [
          "nnt",
          "number needed"
        ]
      },
      {
        "p": "Mechanism: frontal cortex → reward and pain pathways",
        "k": [
          "frontal",
          "pain",
          "reward",
          "vta",
          "accumbens"
        ]
      },
      {
        "p": "Conclusion: robust, so not inert; can be ethical",
        "k": [
          "robust",
          "ethical",
          "not inert",
          "real"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Sensitization, set & placebo"
  },
  {
    "id": "psy-e8",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Explain the therapeutic index and why one drug can have more than one.",
    "points": [
      {
        "p": "Dose-response: effect rises then plateaus (limited receptors)",
        "k": [
          "plateau",
          "receptor",
          "dose response"
        ]
      },
      {
        "p": "Cumulative population curve; ED50 = dose for 50% of subjects",
        "k": [
          "ed50",
          "ed 50",
          "50%",
          "cumulative"
        ]
      },
      {
        "p": "LD50 from animal research",
        "k": [
          "ld50",
          "ld 50",
          "lethal",
          "animal"
        ]
      },
      {
        "p": "TI = LD50 ÷ ED50; bigger is safer",
        "k": [
          "ld50/ed50",
          "ld50 ed50",
          "divid",
          "safer",
          "bigger"
        ]
      },
      {
        "p": "Worked example (130 ÷ 30 ≈ 4)",
        "k": [
          "130",
          "4"
        ]
      },
      {
        "p": "Every effect has its own curve, so multiple TIs (palpitations)",
        "k": [
          "palpitation",
          "each effect",
          "multiple"
        ]
      },
      {
        "p": "Individual differences: sensitive vs resistant, CYP types",
        "k": [
          "sensitive",
          "resistant",
          "cyp",
          "individual"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Dose-response & TI"
  },
  {
    "id": "psy-e9",
    "type": "essay",
    "difficulty": "boss",
    "prompt": "Do drug schedules reflect actual harm? Argue with evidence.",
    "points": [
      {
        "p": "Schedules I–V; I = no medical use + high abuse potential",
        "k": [
          "schedule",
          "medical use"
        ]
      },
      {
        "p": "Cannabis is Schedule I due to history, not safety",
        "k": [
          "cannabis",
          "reefer",
          "history"
        ]
      },
      {
        "p": "Schedule I status blocks research",
        "k": [
          "research"
        ]
      },
      {
        "p": "Alcohol is unscheduled yet most harmful to others",
        "k": [
          "alcohol",
          "unscheduled",
          "not scheduled"
        ]
      },
      {
        "p": "UK harm study: heroin top for user harm",
        "k": [
          "uk",
          "heroin",
          "harm"
        ]
      },
      {
        "p": "Policy options: legalize, decriminalize, prohibit",
        "k": [
          "decriminal",
          "legaliz",
          "prohibit",
          "criminaliz"
        ]
      }
    ],
    "explanation": "Check your answer against the rubric points.",
    "tag": "Drugs, medicine & policy"
  }
];
