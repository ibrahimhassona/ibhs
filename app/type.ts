// Social Media Data 
export interface socialDataProps {
    title: string;
    url: string;
    color: string
  };


  export interface stateType {
    values: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    isLoading: boolean;
  }

  interface softProp {
    proplem_solving: string;
    critical_thinking: string;
    adaptability: string;
    collaboration: string;
    attention_to_detai: string;
    communication: string;
  }
  export interface techSkilsProps  {
    next: string;
    react: string;
    tailwind: string;
    ts: string;
    js: string;
    css: string;
    html: string;
    bootstrap: string;
    strapi: string;
    redux: string;
    api: string;
  }
  export interface skillsProp {
    soft: softProp;
    techSkils:techSkilsProps;
  }

  export interface styleProp {
    style: string;
    to: string;
    content: string;
    target?: string;
    offset?:number;
  }
  // for meta data to each project 
  export type Props = {
    params: { project: string };
  };
  // for the params to each project
  export interface Params {
    project: number;
  }