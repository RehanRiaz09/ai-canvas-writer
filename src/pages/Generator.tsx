import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { UserDropdown } from "@/components/UserDropdown";
import { Sparkles, Copy, Download, RefreshCw, Wand2, Image, Globe, ExternalLink, Crown, Link, Tag, Plus, X, FileText } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState("");
  const [tone, setTone] = useState("");
  const [language, setLanguage] = useState("english");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [userTier, setUserTier] = useState("free"); // free, professional, enterprise
  const [referenceLinks, setReferenceLinks] = useState<string[]>([]);
  const [newReferenceLink, setNewReferenceLink] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [newKeyword, setNewKeyword] = useState("");
  const [wordCount, setWordCount] = useState([500]); // Using array for Slider component

  const contentTypes = [
    { value: "blog-post", label: "Blog Post" },
    { value: "social-media", label: "Social Media Post" },
    { value: "product-description", label: "Product Description" },
    { value: "email-campaign", label: "Email Campaign" },
    { value: "ad-copy", label: "Ad Copy" },
    { value: "press-release", label: "Press Release" },
  ];

  const tones = [
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual" },
    { value: "friendly", label: "Friendly" },
    { value: "authoritative", label: "Authoritative" },
    { value: "conversational", label: "Conversational" },
    { value: "persuasive", label: "Persuasive" },
  ];

  const languages = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "italian", label: "Italian" },
    { value: "portuguese", label: "Portuguese" },
    { value: "chinese", label: "Chinese" },
    { value: "japanese", label: "Japanese" },
  ];

  const competitorSamples = [
    { name: "Copy.ai", url: "https://copy.ai", description: "AI copywriting platform" },
    { name: "Jasper", url: "https://jasper.ai", description: "AI content generation tool" },
    { name: "Writesonic", url: "https://writesonic.com", description: "AI writing assistant" },
    { name: "ContentBot", url: "https://contentbot.ai", description: "AI content creator" },
  ];

  const canGenerateImages = userTier === "professional" || userTier === "enterprise";

  const addReferenceLink = () => {
    if (newReferenceLink.trim() && !referenceLinks.includes(newReferenceLink.trim())) {
      setReferenceLinks([...referenceLinks, newReferenceLink.trim()]);
      setNewReferenceLink("");
    }
  };

  const removeReferenceLink = (index: number) => {
    setReferenceLinks(referenceLinks.filter((_, i) => i !== index));
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const handleGenerate = async () => {
    if (!prompt || !contentType || !tone) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI content generation with reference links, keywords, and word count
    setTimeout(() => {
      const targetWords = wordCount[0];
      const keywordText = keywords.length > 0 ? `\n\n**Target Keywords**: ${keywords.join(', ')}` : '';
      const referencesText = referenceLinks.length > 0 ? 
        `\n\n## References\n${referenceLinks.map((link, i) => `${i + 1}. ${link}`).join('\n')}` : '';
      
      // Generate content based on target word count
      let mainContent = '';
      const baseContent = `${prompt.charAt(0).toUpperCase() + prompt.slice(1)} is an exciting topic that deserves attention. Here's a comprehensive piece crafted in a ${tone} tone, optimized with your provided keywords and informed by reference materials.`;
      
      if (targetWords <= 100) {
        // Short content
        mainContent = `${baseContent} This concise overview highlights the essential aspects of ${prompt}, providing valuable insights for quick understanding and immediate implementation.`;
      } else if (targetWords <= 300) {
        // Medium content
        mainContent = `${baseContent}

In today's fast-paced digital landscape, understanding ${prompt} has become more crucial than ever. This ${contentType.replace('-', ' ')} explores the key aspects and provides valuable insights${keywords.length > 0 ? `, focusing on key terms like ${keywords.slice(0, 3).join(', ')}` : ''}.

Key considerations include innovation, strategy, and measurable results. Whether you're a beginner or an expert, these insights will help you navigate this complex landscape effectively.`;
      } else {
        // Long content
        mainContent = `${baseContent}

## Introduction
In today's fast-paced digital landscape, understanding ${prompt} has become more crucial than ever. This ${contentType.replace('-', ' ')} explores the key aspects and provides valuable insights${keywords.length > 0 ? `, focusing on key terms like ${keywords.slice(0, 3).join(', ')}` : ''}.

## Key Points
- **Innovation**: The latest trends and developments${keywords.includes('innovation') ? ' (keyword targeted)' : ''}
- **Strategy**: Practical approaches for implementation${keywords.includes('strategy') ? ' (keyword targeted)' : ''}
- **Results**: Measurable outcomes and benefits
- **Future**: What lies ahead in this space

## Main Content
The world of ${prompt} continues to evolve rapidly. By adopting a ${tone} approach, we can better understand the nuances and implications. Whether you're a beginner or an expert, these insights will help you navigate this complex landscape.

${keywords.length > 0 ? `This content strategically incorporates your target keywords: ${keywords.join(', ')}, ensuring better SEO performance and relevance.` : ''}

Consider the following strategies:
1. Research thoroughly before implementation
2. Test different approaches systematically
3. Measure results and iterate accordingly
4. Stay updated with industry trends
${referenceLinks.length > 0 ? '5. Leverage insights from trusted reference sources' : ''}

## Detailed Analysis
${targetWords > 500 ? `When examining ${prompt} in greater detail, several critical factors emerge. The landscape is characterized by rapid technological advancement, evolving user expectations, and increasing competitive pressures. Organizations that succeed in this environment typically demonstrate agility, innovation, and a deep understanding of market dynamics.

Furthermore, the implementation of effective strategies requires careful planning, resource allocation, and continuous monitoring. Success metrics should be clearly defined and regularly evaluated to ensure optimal outcomes and return on investment.` : ''}

${targetWords > 800 ? `## Advanced Considerations
For organizations looking to maximize their impact in the ${prompt} space, advanced considerations become paramount. These include scalability planning, risk assessment, compliance requirements, and integration with existing systems and processes.

Additionally, staying ahead of emerging trends requires ongoing investment in research and development, strategic partnerships, and continuous learning initiatives. The most successful organizations maintain a balance between innovation and stability, ensuring sustainable growth while remaining adaptable to market changes.

## Best Practices
Based on industry analysis and expert insights, several best practices have emerged:
- Establish clear objectives and success metrics
- Invest in team training and skill development
- Implement robust monitoring and evaluation systems
- Foster a culture of continuous improvement
- Maintain strong stakeholder communication` : ''}

## Conclusion
${prompt} represents a significant opportunity for growth and innovation. By maintaining a ${tone} perspective and focusing on practical implementation, success becomes achievable.`;
      }

      const sampleContent = `# ${contentType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}

${mainContent}${keywordText}

${referenceLinks.length > 0 ? 'This content has been enriched with insights from your provided reference materials, ensuring accuracy and credibility.' : ''}

*Generated with AIContentPro - targeting ~${targetWords} words*${referencesText}`;

      setGeneratedContent(sampleContent);
      
      // Only generate images for Professional and Enterprise users
      if (canGenerateImages) {
        setGeneratedImage("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop");
        toast.success("Content and image generated successfully!");
      } else {
        setGeneratedImage("");
        toast.success("Content generated successfully! Upgrade to Professional or Enterprise for AI images.");
      }
      
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success("Content copied to clipboard!");
  };

  const downloadContent = () => {
    const blob = new Blob([generatedContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-generated-${contentType}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Content downloaded!");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header with User Dropdown */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-ai-primary" />
            <span className="text-xl font-bold">AIContentPro</span>
          </div>
          <UserDropdown />
        </div>
      </header>
      
      <div className="pt-12 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-4">
            <Wand2 className="h-4 w-4 text-ai-primary" />
            <span className="text-sm font-medium">AI Content Generator</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Create Amazing Content with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into compelling content in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="bg-gradient-card border-border shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-ai-primary" />
                <span>Content Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Content Type
                </label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue placeholder="Choose content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
...

              <div>
                <label className="block text-sm font-medium mb-2">
                  Tone & Style
                </label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {tones.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Globe className="inline h-4 w-4 mr-1" />
                  Language
                </label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  User Tier (Demo)
                </label>
                <Select value={userTier} onValueChange={setUserTier}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="professional">
                      <div className="flex items-center">
                        <Crown className="h-4 w-4 mr-2 text-yellow-500" />
                        Professional
                      </div>
                    </SelectItem>
                    <SelectItem value="enterprise">
                      <div className="flex items-center">
                        <Crown className="h-4 w-4 mr-2 text-purple-500" />
                        Enterprise
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Link className="inline h-4 w-4 mr-1" />
                  Reference Links
                </label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <Input
                      value={newReferenceLink}
                      onChange={(e) => setNewReferenceLink(e.target.value)}
                      placeholder="Add reference URL..."
                      className="bg-muted/50 border-border"
                      onKeyPress={(e) => e.key === 'Enter' && addReferenceLink()}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addReferenceLink}
                      className="border-border hover:bg-muted px-3"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {referenceLinks.length > 0 && (
                    <div className="space-y-1">
                      {referenceLinks.map((link, index) => (
                        <div key={index} className="flex items-center justify-between bg-muted/30 rounded p-2">
                          <span className="text-sm truncate flex-1 mr-2">{link}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeReferenceLink(index)}
                            className="h-6 w-6 p-0 hover:bg-destructive/20"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Tag className="inline h-4 w-4 mr-1" />
                  Keywords
                </label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <Input
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                      placeholder="Add keyword..."
                      className="bg-muted/50 border-border"
                      onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addKeyword}
                      className="border-border hover:bg-muted px-3"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary" className="bg-ai-primary/20 text-ai-primary border-ai-primary/30">
                          {keyword}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeKeyword(index)}
                            className="h-4 w-4 p-0 ml-1 hover:bg-destructive/20"
                          >
                            <X className="h-2 w-2" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <FileText className="inline h-4 w-4 mr-1" />
                  Word Count: {wordCount[0]} words
                </label>
                <div className="px-3 py-2">
                  <Slider
                    value={wordCount}
                    onValueChange={setWordCount}
                    max={2000}
                    min={50}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>50 words</span>
                    <span>2000 words</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Topic / Description
                </label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to write about..."
                  rows={6}
                  className="bg-muted/50 border-border resize-none"
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="bg-gradient-card border-border shadow-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-ai-primary" />
                  <span>Generated Content</span>
                </CardTitle>
                {generatedContent && (
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                      className="border-border hover:bg-muted"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadContent}
                      className="border-border hover:bg-muted"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!generatedContent ? (
                <div className="flex flex-col items-center justify-center h-96 text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-ai-primary/20 rounded-full blur-md"></div>
                    <div className="relative bg-muted/50 rounded-full p-8">
                      <Wand2 className="h-12 w-12 text-ai-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ready to Create</h3>
                  <p className="text-muted-foreground">
                    Fill in the settings and click generate to create amazing content
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {generatedImage && (
                    <div className="relative">
                      <img
                        src={generatedImage}
                        alt="Generated content image"
                        className="w-full h-48 object-cover rounded-lg border border-border"
                      />
                      <Badge className="absolute top-2 right-2 bg-ai-primary/20 text-ai-primary border-ai-primary/30">
                        <Image className="h-3 w-3 mr-1" />
                        AI Generated
                      </Badge>
                    </div>
                  )}
                  <div className="bg-muted/30 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                      {generatedContent}
                    </pre>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Competitor Samples Section */}
        <div className="mt-16 max-w-7xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ExternalLink className="h-5 w-5 text-ai-primary" />
                <span>Competitor Tools & Inspiration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitorSamples.map((competitor) => (
                  <div key={competitor.name} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border hover:border-ai-primary/50 transition-colors">
                    <div>
                      <h4 className="font-medium">{competitor.name}</h4>
                      <p className="text-sm text-muted-foreground">{competitor.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(competitor.url, '_blank')}
                      className="border-border hover:bg-muted"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}