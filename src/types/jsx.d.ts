declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      section: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      h1: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h4: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h5: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h6: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      p: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      span: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      ul: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      li: import('react').DetailedHTMLProps<import('react').LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
      form: import('react').DetailedHTMLProps<import('react').FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
      label: import('react').DetailedHTMLProps<import('react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      input: import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      textarea: import('react').DetailedHTMLProps<import('react').TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
      select: import('react').DetailedHTMLProps<import('react').SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
      option: import('react').DetailedHTMLProps<import('react').OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
      a: import('react').DetailedHTMLProps<import('react').AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      button: import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      main: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      header: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      nav: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      article: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      aside: import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>;
      img: import('react').DetailedHTMLProps<import('react').ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    }
  }
}

export {};