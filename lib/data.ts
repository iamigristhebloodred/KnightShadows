import {
  BERU_PACKAGE_CATALOG,
  BERU_PACKAGE_CATEGORIES_ORDER,
} from './beru-packages';

export interface Product {
  id: 'beru' | 'beru-index' | 'tuipdf';
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  version: string;
  language: string;
  license: string;
  repoUrl: string;
  href: string;
  category: string;
  accentLabel: string;
  installCommands: {
    label: string;
    command: string;
  }[];
  highlights: string[];
}

export interface Contributor {
  name: string;
  title: 'Founder' | 'Co-Founder' | 'Core Member';
  initials: string;
  tenure: string;
  active: boolean;
  focus: string;
}

export const ORG_INFO = {
  name: 'KNIGHTSHADOWS',
  displayName: 'KnightShadows',
  tagline: 'High-performance, local-first developer tools built in Rust.',
  location: 'India',
  createdYear: '2025',
  githubUrl: 'https://github.com/KnightShadows',
  repos: {
    beru: 'https://github.com/KnightShadows/beru',
    beruIndex: 'https://github.com/KnightShadows/beru_index',
    tuipdf: 'https://github.com/KnightShadows/tuipdf',
  },
};

export const CONTRIBUTORS: Contributor[] = [
  {
    name: 'Igris',
    title: 'Founder',
    initials: 'IG',
    tenure: '2025 Jan – Present',
    active: true,
    focus: 'Organization Leadership & Vision',
  },
  {
    name: 'Aditya Anand',
    title: 'Co-Founder',
    initials: 'AA',
    tenure: '2025 Jan – Present',
    active: true,
    focus: 'Beru, tuipdf & beru_index',
  },
  {
    name: 'Anmol Sinha',
    title: 'Core Member',
    initials: 'AS',
    tenure: '2025 Jan – Present',
    active: true,
    focus: 'Systems & Ecosystem Tooling',
  },
  {
    name: 'Nitin Kumar',
    title: 'Core Member',
    initials: 'NK',
    tenure: '2025 Jan – 2026 Jan',
    active: false,
    focus: 'Architecture & Security',
  },
  {
    name: 'Krisita Chhetry',
    title: 'Core Member',
    initials: 'KC',
    tenure: '',
    active: false,
    focus: 'Design Systems & User Experience',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'beru',
    slug: 'beru',
    name: 'Beru',
    tagline: 'Declarative C++ Package Manager & Build Orchestrator',
    headline: 'C++ builds at lightspeed',
    description:
      'Replaces convoluted CMakeLists.txt scripts with declarative Beru.toml manifests, resolves graphs mathematically with the PubGrub SAT solver, isolates ABIs cryptographically, and synthesizes CMake toolchains out of the box.',
    version: 'v0.6.2',
    language: 'Rust 1.85+',
    license: 'MIT OR Apache-2.0',
    repoUrl: 'https://github.com/KnightShadows/beru',
    href: '/products/beru',
    category: 'C++ Build System',
    accentLabel: 'Flagship Tool',
    installCommands: [
      {
        label: 'Linux / macOS',
        command: 'curl -sSL https://raw.githubusercontent.com/KnightShadows/Beru/main/install.sh | bash',
      },
      {
        label: 'Windows (PowerShell)',
        command: 'Invoke-WebRequest -Uri https://raw.githubusercontent.com/KnightShadows/Beru/main/install.ps1 -OutFile install.ps1; .\\install.ps1',
      },
      {
        label: 'Cargo',
        command: 'cargo install --git https://github.com/KnightShadows/beru.git',
      },
    ],
    highlights: [
      'Declarative Beru.toml manifests & deterministic Beru.lock lockfiles',
      'PubGrub SAT dependency solver with step-by-step conflict proofs',
      'Cryptographic AbiProfile cache preventing cross-compiler ABI poisoning',
      'Single-file ad-hoc execution via `beru run script.cpp` with inline metadata',
      'Monorepo `[workspace]` orchestration and air-gapped `--offline` builds',
      'Zero-friction `beru setup` toolchain probe & `beru self-update`',
    ],
  },
  {
    id: 'tuipdf',
    slug: 'tuipdf',
    name: 'tuipdf',
    tagline: 'Terminal-Native Pure-Rust PDF Compressor & Toolkit',
    headline: 'Private PDF compression in your terminal',
    description:
      'A keyboard-driven TUI utility built in pure Rust with zero C dependencies. Analyzes PDF stream objects individually to compress embedded imagery while preserving fonts, vectors, and CMYK/ICC color fidelity—100% offline.',
    version: 'v0.1.1',
    language: 'Pure Rust',
    license: 'MPL-2.0',
    repoUrl: 'https://github.com/KnightShadows/tuipdf',
    href: '/products/tuipdf',
    category: 'Document Utility',
    accentLabel: 'Privacy-First TUI',
    installCommands: [
      {
        label: 'Cargo',
        command: 'cargo install tuipdf',
      },
      {
        label: 'Windows (PowerShell)',
        command: 'irm https://raw.githubusercontent.com/KnightShadows/tuipdf/main/install_windows.ps1 | iex',
      },
      {
        label: 'From Source',
        command: 'git clone https://github.com/KnightShadows/tuipdf.git && cd tuipdf && cargo install --path .',
      },
    ],
    highlights: [
      'Zero uploads, zero telemetry — runs strictly offline on local hardware',
      'Per-object compression leaving vectors, fonts, and content streams intact',
      'Three quality profiles: Low (85%), Medium (75%), and High (50% + strip)',
      'Color-space aware across DeviceRGB, DeviceGray, DeviceCMYK & ICCBased',
      'Handles scanned 1-bit, 2-bit, 4-bit, and 8-bit multi-depth documents',
      'Parallelized with rayon and built on ratatui, crossterm, and lopdf',
    ],
  },
  {
    id: 'beru-index',
    slug: 'beru-index',
    name: 'beru_index',
    tagline: 'Decentralized Global Registry Index for C++ Libraries',
    headline: '223+ C++ recipes ready in one command',
    description:
      'The official Git-backed package registry powering Beru. Stores clean, auditable `<package>/<version>/recipe.toml` build recipes that shallow-clone directly to `~/.beru/index` for offline-capable dependency resolution.',
    version: '223 Recipes',
    language: 'TOML Recipes',
    license: 'Apache-2.0',
    repoUrl: 'https://github.com/KnightShadows/beru_index',
    href: '/products/beru-index',
    category: 'Package Registry',
    accentLabel: 'Decentralized Index',
    installCommands: [
      {
        label: 'Sync Index',
        command: 'beru index update',
      },
      {
        label: 'Search Packages',
        command: 'beru search fmt',
      },
      {
        label: 'Add Dependency',
        command: 'beru add fmt --version 11.0.2',
      },
    ],
    highlights: [
      '223+ verified C & C++ library recipes from Boost and gRPC to raylib and SDL',
      'Structured `<package_name>/<version>/recipe.toml` layout',
      'Automatic shallow clone to `~/.beru/index` with zero central lock-in',
      'Easy fork-and-PR recipe authoring with `beru recipe init` & `recipe lint`',
    ],
  },
];

export const BERU_COMPARISON = [
  { capability: 'Declarative TOML Manifest', cmake: 'No', conan: 'Python / INI', vcpkg: 'JSON', beru: 'Yes (Beru.toml)' },
  { capability: 'Deterministic Lockfile', cmake: 'No', conan: 'Optional', vcpkg: 'Git Submodule', beru: 'Yes (Beru.lock)' },
  { capability: 'SAT Dependency Solver', cmake: 'No', conan: 'Heuristic', vcpkg: 'Heuristic', beru: 'PubGrub SAT' },
  { capability: 'Conflict Explanations', cmake: 'Silent failure', conan: 'Generic error', vcpkg: 'Truncated', beru: 'Step-by-Step Proof' },
  { capability: 'Single-File Ad-Hoc Scripts', cmake: 'No', conan: 'No', vcpkg: 'No', beru: 'Yes (beru run)' },
  { capability: 'Cryptographic ABI Isolation', cmake: 'No', conan: 'Manual profiles', vcpkg: 'Triplet matching', beru: 'Automated AbiProfile' },
  { capability: 'Offline-First Execution', cmake: 'No', conan: 'Complex cache', vcpkg: 'Cache directory', beru: 'Native --offline' },
  { capability: 'Zero-Config Setup Assistant', cmake: 'No', conan: 'No', vcpkg: 'No', beru: 'Yes (beru setup)' },
];

export const BERU_COMMANDS = [
  { category: 'Scaffolding', cmd: 'beru new <name>', desc: 'Create a new executable or library C++ project' },
  { category: 'Scaffolding', cmd: 'beru init', desc: 'Initialize a Beru.toml manifest in an existing directory' },
  { category: 'Dependencies', cmd: 'beru add <pkg>', desc: 'Add and resolve a dependency in Beru.toml' },
  { category: 'Dependencies', cmd: 'beru remove <pkg>', desc: 'Remove a dependency and refresh Beru.lock' },
  { category: 'Dependencies', cmd: 'beru update [pkg]', desc: 'Upgrade locked packages to latest semver matches' },
  { category: 'Dependencies', cmd: 'beru outdated', desc: 'Compare lockfile versions against registry releases' },
  { category: 'Dependencies', cmd: 'beru tree', desc: 'Print a visual DAG tree of project dependencies' },
  { category: 'Dependencies', cmd: 'beru vendor [path]', desc: 'Vendor dependencies locally for air-gapped builds' },
  { category: 'Build & Run', cmd: 'beru build', desc: 'Compile the project and all dependencies' },
  { category: 'Build & Run', cmd: 'beru check', desc: 'Rapid syntax-only check bypassing the linker' },
  { category: 'Build & Run', cmd: 'beru fmt', desc: 'Format C++ files with clang-format' },
  { category: 'Build & Run', cmd: 'beru run [script]', desc: 'Build and execute target or single-file C++ script' },
  { category: 'Build & Run', cmd: 'beru test', desc: 'Build and run tests in parallel via CTest' },
  { category: 'Tooling & Env', cmd: 'beru setup', desc: 'Inspect and configure git, cmake, compiler, and ninja' },
  { category: 'Tooling & Env', cmd: 'beru self-update', desc: 'Download and upgrade to the latest Beru release' },
  { category: 'Tooling & Env', cmd: 'beru cache', desc: 'Manage global ABI-isolated binary cache' },
];

export const TUIPDF_PIPELINE = [
  { step: '01', name: 'Load & Parse', module: 'lopdf', detail: 'Loads and validates PDF structure & cross-reference tables.' },
  { step: '02', name: 'Classify Objects', module: 'Stream Tagger', detail: 'Separates JPEG, Flate/PNG, RawBitmap, Fonts, Forms, and Content.' },
  { step: '03', name: 'Color Detect', module: 'ColorSpace', detail: 'Resolves DeviceRGB, DeviceCMYK, Grayscale & ICCBased (skips Indexed).' },
  { step: '04', name: 'Extract Pixels', module: 'flate2', detail: 'Decompresses raw image streams cleanly in memory.' },
  { step: '05', name: 'Compress', module: 'image + rayon', detail: 'Re-encodes images at tier quality; leaves vectors & fonts untouched.' },
  { step: '06', name: 'Rebuild & Write', module: 'PDF Export', detail: 'Reinserts streams, updates dictionaries, and writes compact output.' },
];

export const TUIPDF_TIERS = [
  { name: 'Low', quality: '85% JPEG quality', note: 'Archival fidelity with smart stream cleanup for minimal visual change.' },
  { name: 'Medium', quality: '75% JPEG quality', note: 'Balanced everyday compression preserving crisp scanned text and graphics.' },
  { name: 'High', quality: '50% + metadata strip', note: 'Maximum file size reduction for email, upload, and portable sharing.' },
];

export const RELEASES = [
  {
    slug: '/products/beru',
    category: 'Releases',
    date: 'November 10, 2026',
    title: 'Beru v0.6.2: Declarative C++ builds, PubGrub SAT resolution, and ABI isolation',
    summary:
      'Latest release featuring prebuilt binaries across Linux musl, macOS, and Windows, single-file `beru run` scripts, `beru setup` toolchain auto-remediation, and CMakePresets generation.',
    badge: 'v0.6.2 · 9 release assets',
    featured: true,
  },
  {
    slug: '/products/tuipdf',
    category: 'Releases',
    date: 'May 3, 2026',
    title: 'tuipdf v0.1.1: Offline, color-accurate PDF compression in pure Rust',
    summary:
      'Zero external C dependencies. Parallel image stream compression via rayon with full DeviceRGB, DeviceCMYK, and ICCBased color-space fidelity inside a keyboard-driven terminal UI.',
    badge: 'v0.1.1 · MPL-2.0',
    featured: false,
  },
  {
    slug: '/products/beru-index',
    category: 'Ecosystem',
    date: 'August 15, 2026',
    title: 'beru_index reaches 223+ C & C++ package recipes',
    summary:
      'From fmt, spdlog, and nlohmann-json to Boost, Vulkan, raylib, gRPC, and OpenSSL — shallow-cloned locally into `~/.beru/index` for deterministic dependency builds.',
    badge: '223 Packages',
    featured: false,
  },
];

export const BERU_INDEX_PACKAGES: string[] = BERU_PACKAGE_CATALOG.map((pkg) => pkg.name);

export const PACKAGE_CATEGORIES: Record<string, string[]> = Object.fromEntries(
  BERU_PACKAGE_CATEGORIES_ORDER.map((category) => [
    category,
    BERU_PACKAGE_CATALOG.filter((pkg) => pkg.category === category).map((pkg) => pkg.name),
  ])
);
