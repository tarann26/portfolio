export type ContributionStatus = "merged" | "open";

export interface Contribution {
  pr: number;
  title: string;
  status: ContributionStatus;
  mergedBy?: string;
  url: string;
}

export interface OSSProject {
  name: string;
  repo: string;
  repoUrl: string;
  lang: string;
  blurb: string;
  contributions: Contribution[];
}

// Authored upstream PRs; excludes personal repositories and employment work.
// Verified against GitHub on October 14, 2026.
export const ossVerifiedAt = "2026-10-14";

export const ossProjects: OSSProject[] = [
  {
    "name": "libgit2",
    "repo": "libgit2/libgit2",
    "repoUrl": "https://github.com/libgit2/libgit2",
    "lang": "C",
    "blurb": "The portable C library behind Git operations in GitHub, GitLab, and countless developer tools.",
    "contributions": [
      {
        "pr": 7332,
        "title": "Detect file/directory conflicts at any index position",
        "mergedBy": "Edward Thomson · lead maintainer",
        "url": "https://github.com/libgit2/libgit2/pull/7332",
        "status": "merged"
      },
      {
        "pr": 7331,
        "title": "Parse diffs that add an empty file",
        "mergedBy": "Edward Thomson · lead maintainer",
        "url": "https://github.com/libgit2/libgit2/pull/7331",
        "status": "merged"
      }
    ]
  },
  {
    "name": "NLTK",
    "repo": "nltk/nltk",
    "repoUrl": "https://github.com/nltk/nltk",
    "lang": "Python",
    "blurb": "One of the most widely used natural-language-processing libraries in Python.",
    "contributions": [
      {
        "pr": 3728,
        "title": "Recognize sentence boundaries after Unicode closing quotes",
        "mergedBy": "ekaf · maintainer",
        "url": "https://github.com/nltk/nltk/pull/3728",
        "status": "merged"
      },
      {
        "pr": 3724,
        "title": "Preserve repeated non-Latin letters during tokenization",
        "mergedBy": "Steven Bird · lead maintainer",
        "url": "https://github.com/nltk/nltk/pull/3724",
        "status": "merged"
      },
      {
        "pr": 3723,
        "title": "Correct spacing around periods during detokenization",
        "mergedBy": "Steven Bird · lead maintainer",
        "url": "https://github.com/nltk/nltk/pull/3723",
        "status": "merged"
      },
      {
        "pr": 3725,
        "title": "Handle unavailable temporary directories in path-security checks",
        "mergedBy": "ekaf · maintainer",
        "url": "https://github.com/nltk/nltk/pull/3725",
        "status": "merged"
      }
    ]
  },
  {
    "name": "TanStack Table",
    "repo": "TanStack/table",
    "repoUrl": "https://github.com/TanStack/table",
    "lang": "TypeScript",
    "blurb": "Headless datagrid library used across React, Vue, Solid, Svelte, and Angular.",
    "contributions": [
      {
        "pr": 6523,
        "title": "Exclude non-numeric values from median aggregation",
        "mergedBy": "Kevin Vandy · maintainer",
        "url": "https://github.com/TanStack/table/pull/6523",
        "status": "merged"
      }
    ]
  },
  {
    "name": "pwntools",
    "repo": "Gallopsled/pwntools",
    "repoUrl": "https://github.com/Gallopsled/pwntools",
    "lang": "Python",
    "blurb": "The de-facto CTF and exploit-development framework in Python.",
    "contributions": [
      {
        "pr": 2762,
        "title": "Fix amd64 SigreturnFrame offset in the SROP builder",
        "mergedBy": "Arusekk · maintainer",
        "url": "https://github.com/Gallopsled/pwntools/pull/2762",
        "status": "merged"
      },
      {
        "pr": 2761,
        "title": "Preserve the final byte when serializing file structures",
        "status": "open",
        "url": "https://github.com/Gallopsled/pwntools/pull/2761"
      }
    ]
  },
  {
    "name": "Poetry",
    "repo": "python-poetry/poetry",
    "repoUrl": "https://github.com/python-poetry/poetry",
    "lang": "Python",
    "blurb": "Python dependency management and packaging.",
    "contributions": [
      {
        "pr": 11003,
        "title": "Select the environment-compatible version from duplicate lock entries",
        "mergedBy": "radoering",
        "url": "https://github.com/python-poetry/poetry/pull/11003",
        "status": "merged"
      },
      {
        "pr": 11001,
        "title": "Distinguish virtual environments with similar path prefixes",
        "status": "open",
        "url": "https://github.com/python-poetry/poetry/pull/11001"
      }
    ]
  },
  {
    "name": "JavaParser",
    "repo": "javaparser/javaparser",
    "repoUrl": "https://github.com/javaparser/javaparser",
    "lang": "Java",
    "blurb": "Java source parsing and code transformation.",
    "contributions": [
      {
        "pr": 5086,
        "title": "Generate primitive-type keywords independently of system locale",
        "mergedBy": "jlerbsc",
        "url": "https://github.com/javaparser/javaparser/pull/5086",
        "status": "merged"
      },
      {
        "pr": 5085,
        "title": "Preserve array declaration syntax when printing Java source",
        "status": "open",
        "url": "https://github.com/javaparser/javaparser/pull/5085"
      }
    ]
  },
  {
    "name": "PMD",
    "repo": "pmd/pmd",
    "repoUrl": "https://github.com/pmd/pmd",
    "lang": "Java",
    "blurb": "Static analysis for Java, Apex, and other languages.",
    "contributions": [
      {
        "pr": 6955,
        "title": "Report the correct location for an Apex test rule violation",
        "mergedBy": "UncleOwen",
        "url": "https://github.com/pmd/pmd/pull/6955",
        "status": "merged"
      }
    ]
  },
  {
    "name": "Dexie.js",
    "repo": "dexie/Dexie.js",
    "repoUrl": "https://github.com/dexie/Dexie.js",
    "lang": "TypeScript",
    "blurb": "An IndexedDB wrapper for browser applications.",
    "contributions": [
      {
        "pr": 2325,
        "title": "Handle an index named constructor without crashing",
        "mergedBy": "dfahlander",
        "url": "https://github.com/dexie/Dexie.js/pull/2325",
        "status": "merged"
      },
      {
        "pr": 2324,
        "title": "Refresh live queries for valid zero and empty-string keys",
        "status": "open",
        "url": "https://github.com/dexie/Dexie.js/pull/2324"
      }
    ]
  },
  {
    "name": "xterm.js",
    "repo": "xtermjs/xterm.js",
    "repoUrl": "https://github.com/xtermjs/xterm.js",
    "lang": "TypeScript",
    "blurb": "Terminal emulation for browser applications.",
    "contributions": [
      {
        "pr": 6081,
        "title": "Restore viewport scrolling after clearing scrollback",
        "mergedBy": "Tyriar",
        "url": "https://github.com/xtermjs/xterm.js/pull/6081",
        "status": "merged"
      }
    ]
  },
  {
    "name": "XState",
    "lang": "TypeScript",
    "blurb": "State machines and statecharts for application logic.",
    "repo": "statelyai/xstate",
    "repoUrl": "https://github.com/statelyai/xstate",
    "contributions": [
      {
        "pr": 5621,
        "title": "Preserve TypeScript event narrowing in generic functions",
        "status": "open",
        "url": "https://github.com/statelyai/xstate/pull/5621"
      }
    ]
  },
  {
    "name": "Pygments",
    "lang": "Python",
    "blurb": "Syntax highlighting for source code and markup.",
    "repo": "pygments/pygments",
    "repoUrl": "https://github.com/pygments/pygments",
    "contributions": [
      {
        "pr": 3245,
        "title": "Recognize nested LESS selectors in syntax highlighting",
        "status": "open",
        "url": "https://github.com/pygments/pygments/pull/3245"
      }
    ]
  },
  {
    "name": "Mockito",
    "lang": "Java",
    "blurb": "A mocking framework for Java tests.",
    "repo": "mockito/mockito",
    "repoUrl": "https://github.com/mockito/mockito",
    "contributions": [
      {
        "pr": 3849,
        "title": "Preserve thread interrupt status in delayed answers",
        "status": "open",
        "url": "https://github.com/mockito/mockito/pull/3849"
      }
    ]
  }
];

export const mergedPRCount = ossProjects.reduce(
  (sum, project) => sum + project.contributions.filter(c => c.status === "merged").length,
  0,
);

export const openPRCount = ossProjects.reduce(
  (sum, project) => sum + project.contributions.filter(c => c.status === "open").length,
  0,
);

export const mergedProjectCount = ossProjects.filter(
  project => project.contributions.some(c => c.status === "merged"),
).length;

export function upstreamPRSearchUrl(status: ContributionStatus) {
  const query = `is:pr author:tarann26 is:${status} -user:tarann26 -repo:Pulse-Imaging/Pulse-Imaging`;
  return `https://github.com/search?q=${encodeURIComponent(query)}&type=pullrequests`;
}
