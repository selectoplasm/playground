type PluginFileStrings = {
   name: string;
   config?: string;
   previewHtml?: string;
   previewCss?: string;
   patternsHtml?: string;
   patternsCss?: string;
   staticCss?: string;
   utilityCss?: string;
   workerUrl?: string;
};

declare global {
   var getLocalPlugins: () => PluginFileStrings[]
   var localPlugins: PluginFileStrings[]
}
