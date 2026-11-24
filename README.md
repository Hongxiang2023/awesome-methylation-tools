# DNA Methylation Tools

A catalogue of computational methods for DNA methylation data. Every tool is tagged by **function** (alignment, differential methylation, deconvolution, cancer classification, …) and by **data type** (array, short-read bisulfite, single-cell, spatial, nanopore, PacBio, cfDNA, …), with its journal, publication year, citation count and paper link.

**Browse the searchable site:** <https://hongxiang2023.github.io/awesome-methylation-tools/> (live once GitHub Pages is enabled), or open `index.html` locally.

## Adding or correcting a tool

1. Add a row to [`data/tools.tsv`](data/tools.tsv). Only four columns matter for a published tool:

   | Column | What to put |
   |---|---|
   | `name` | Tool name |
   | `functions` | One or more codes from [`data/vocab.json`](data/vocab.json), separated by `;`. The first is the primary function. |
   | `platforms` | One or more data-type codes from the same file, separated by `;` |
   | `doi` | DOI of the paper |
   | `url` | Optional link to the code or website |
   | `journal`, `year`, `title` | Leave empty. Fill them only when the tool has no DOI, or the DOI is not in Crossref (arXiv, for example). |

2. Run `python3 scripts/build.py`. It looks up each DOI in Crossref and regenerates `data/tools.json`, `data/tools.js` and the table below. No dependencies beyond Python 3.
3. Open a pull request.

To add a new function or data type, add a code and label to `data/vocab.json`.

Citation counts are Crossref's "cited-by" numbers. They run lower than Google Scholar's, but they are free to query and consistent across tools. Rerun the build script to refresh them.

## Catalogue

<!-- TOOLS:START -->
_274 tools. Metadata from Crossref, refreshed 2026-11-24. Each tool is listed once, under its primary function; the website shows every tag._

### Alignment & methylation calling

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| Bismark | Short-read (WGBS / RRBS / EM-seq), Single-cell | Bioinformatics | 2011 | 5,376 | [Bismark: a flexible aligner and methylation caller for Bisulfite-Seq applications](https://doi.org/10.1093/bioinformatics/btr167) |
| BSMAP | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2009 | 1,144 | [BSMAP: whole genome bisulfite sequence MAPping program](https://doi.org/10.1186/1471-2105-10-232) |
| methylpy | Short-read (WGBS / RRBS / EM-seq), Single-cell | Nature | 2015 | 682 | [Human body epigenome maps reveal noncanonical DNA methylation variation](https://doi.org/10.1038/nature14465) |
| QUMA | Targeted / amplicon | Nucleic Acids Research | 2008 | 570 | [QUMA: quantification tool for methylation analysis](https://doi.org/10.1093/nar/gkn294) |
| DNMTools (MethPipe) | Short-read (WGBS / RRBS / EM-seq) | PLoS ONE | 2013 | 417 | [A Reference Methylome Database and Analysis Pipeline to Facilitate Integrative and Comparative Epigenomics](https://doi.org/10.1371/journal.pone.0081148) |
| BS-Seeker2 | Short-read (WGBS / RRBS / EM-seq) | BMC Genomics | 2013 | 410 | [BS-Seeker2: a versatile aligning pipeline for bisulfite sequencing data](https://doi.org/10.1186/1471-2164-14-774) |
| HISAT-3N | Short-read (WGBS / RRBS / EM-seq) | Genome Research | 2021 | 372 | [Rapid and accurate alignment of nucleotide conversion sequencing reads with HISAT-3N](https://doi.org/10.1101/gr.275193.120) |
| MOABS | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2014 | 288 | [MOABS: model based analysis of bisulfite sequencing data](https://doi.org/10.1186/gb-2014-15-2-r38) |
| BatMeth2 | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2019 | 118 | [An integrated package for bisulfite DNA methylation data analysis with Indel-sensitive mapping](https://doi.org/10.1186/s12859-018-2593-4) |
| BiQ Analyzer HT | Targeted / amplicon | Nucleic Acids Research | 2011 | 118 | [BiQ Analyzer HT: locus-specific analysis of DNA methylation by high-throughput bisulfite sequencing](https://doi.org/10.1093/nar/gkr312) |
| BSBolt | Short-read (WGBS / RRBS / EM-seq) | GigaScience | 2021 | 86 | [BiSulfite Bolt: A bisulfite sequencing analysis platform](https://doi.org/10.1093/gigascience/giab033) |
| RRBSMAP | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2012 | 84 | [RRBSMAP: a fast, accurate and user-friendly alignment tool for reduced representation bisulfite sequencing](https://doi.org/10.1093/bioinformatics/btr668) |
| MethylCoder | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2011 | 73 | [MethylCoder: software pipeline for bisulfite-treated sequences](https://doi.org/10.1093/bioinformatics/btr394) |
| WALT | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2016 | 71 | [WALT: fast and accurate read mapping for bisulfite sequencing](https://doi.org/10.1093/bioinformatics/btw490) |
| gemBS | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2019 | 63 | [gemBS: high throughput processing for DNA methylation data from bisulfite sequencing](https://doi.org/10.1093/bioinformatics/bty690) |
| BISCUIT | Short-read (WGBS / RRBS / EM-seq), Single-cell | Nucleic Acids Research | 2024 | 53 | [BISCUIT: an efficient, standards-compliant tool suite for simultaneous genetic and epigenetic inference in bulk and single-cell studies](https://doi.org/10.1093/nar/gkae097) |
| segemehl | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2012 | 49 | [Fast and sensitive mapping of bisulfite-treated sequencing data](https://doi.org/10.1093/bioinformatics/bts254) |
| BS-Seeker3 | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2018 | 42 | [BS-Seeker3: ultrafast pipeline for bisulfite sequencing](https://doi.org/10.1186/s12859-018-2120-7) |
| scBS-map | Single-cell | Bioinformatics | 2019 | 27 | [Using local alignment to enhance single-cell bisulfite sequencing data efficiency](https://doi.org/10.1093/bioinformatics/btz125) |
| abismal | Short-read (WGBS / RRBS / EM-seq) | NAR Genomics and Bioinformatics | 2021 | 26 | [Fast and memory-efficient mapping of short bisulfite sequencing reads using a two-letter alphabet](https://doi.org/10.1093/nargab/lqab115) |
| BRAT-nova | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2016 | 20 | [BRAT-nova: fast and accurate mapping of bisulfite-treated reads](https://doi.org/10.1093/bioinformatics/btw226) |
| Arioc | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2018 | 20 | [Arioc: GPU-accelerated alignment of short bisulfite-treated reads](https://doi.org/10.1093/bioinformatics/bty167) |
| ERNE-BS5 | Short-read (WGBS / RRBS / EM-seq) | Proceedings of the ACM Conference on Bioinformatics, Computational Biology and Biomedicine | 2012 | 18 | [ERNE-BS5](https://doi.org/10.1145/2382936.2382938) |
| methylGrapher | Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2025 | 15 | [methylGrapher: genome-graph-based processing of DNA methylation data from whole genome bisulfite sequencing](https://doi.org/10.1093/nar/gkaf028) |
| FAME | Short-read (WGBS / RRBS / EM-seq), Single-cell | Bioinformatics | 2023 | 1 | [Efficiently quantifying DNA methylation for bulk- and single-cell bisulfite data](https://doi.org/10.1093/bioinformatics/btad386) |
| [bwa-meth](https://github.com/brentp/bwa-meth) | Short-read (WGBS / RRBS / EM-seq) | arXiv (preprint) | 2014 | – | [Fast and accurate alignment of long bisulfite-seq reads](https://doi.org/10.48550/arxiv.1401.1129) |
| [MethylDackel](https://github.com/dpryan79/MethylDackel) | Short-read (WGBS / RRBS / EM-seq) | – | – | – | – |

### Long-read modification calling

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| SMRT kinetics (original) | PacBio | Nature Methods | 2010 | 1,401 | [Direct detection of DNA methylation during single-molecule, real-time sequencing](https://doi.org/10.1038/nmeth.1459) |
| Nanopolish | Nanopore | Nature Methods | 2017 | 1,197 | [Detecting DNA cytosine methylation using nanopore sequencing](https://doi.org/10.1038/nmeth.4184) |
| signalAlign | Nanopore | Nature Methods | 2017 | 519 | [Mapping DNA methylation with high-throughput nanopore sequencing](https://doi.org/10.1038/nmeth.4189) |
| DeepMod | Nanopore | Nature Communications | 2019 | 297 | [Detection of DNA base modifications by deep recurrent neural network on Oxford Nanopore sequencing data](https://doi.org/10.1038/s41467-019-10168-2) |
| Tombo | Nanopore | bioRxiv (preprint) | 2016 | 287 | [De novo Identification of DNA Modifications Enabled by Genome-Guided Nanopore Signal Processing](https://doi.org/10.1101/094672) |
| DeepSignal | Nanopore | Bioinformatics | 2019 | 241 | [DeepSignal: detecting DNA methylation state from Nanopore sequencing reads using deep-learning](https://doi.org/10.1093/bioinformatics/btz276) |
| nanodisco | Nanopore | Nature Methods | 2021 | 208 | [Discovering multiple types of DNA methylation from bacteria and microbiome using nanopore sequencing](https://doi.org/10.1038/s41592-021-01109-3) |
| METEORE | Nanopore | Nature Communications | 2021 | 175 | [Systematic benchmarking of tools for CpG methylation detection from nanopore sequencing](https://doi.org/10.1038/s41467-021-23778-6) |
| mCaller | Nanopore | Nature Communications | 2019 | 168 | [Single-molecule sequencing detection of N6-methyladenine in microbial reference materials](https://doi.org/10.1038/s41467-019-08289-9) |
| f5c | Nanopore | BMC Bioinformatics | 2020 | 132 | [GPU accelerated adaptive banded event alignment for rapid comparative nanopore signal analysis](https://doi.org/10.1186/s12859-020-03697-x) |
| DeepMod2 | Nanopore | Nature Communications | 2024 | 127 | [A signal processing and deep learning framework for methylation detection using Oxford Nanopore sequencing](https://doi.org/10.1038/s41467-024-45778-y) |
| HK model | PacBio | Proceedings of the National Academy of Sciences | 2021 | 126 | [Genome-wide detection of cytosine methylation by single molecule real-time sequencing](https://doi.org/10.1073/pnas.2019768118) |
| ccsmeth | PacBio | Nature Communications | 2023 | 110 | [DNA 5-methylcytosine detection and methylation phasing using PacBio circular consensus sequencing](https://doi.org/10.1038/s41467-023-39784-9) |
| DeepSignal-plant | Nanopore | Nature Communications | 2021 | 108 | [Genome-wide detection of cytosine methylations in plant from Nanopore data using deep learning](https://doi.org/10.1038/s41467-021-26278-9) |
| Uncalled4 | Nanopore | Nature Methods | 2025 | 66 | [Uncalled4 improves nanopore DNA and RNA modification detection via fast and accurate signal alignment](https://doi.org/10.1038/s41592-025-02631-4) |
| fibertools | PacBio, Nanopore | Genome Research | 2024 | 63 | [DNA-m6A calling and integrated long-read epigenetic and genetic analysis with fibertools](https://doi.org/10.1101/gr.279095.124) |
| Rockfish | Nanopore | Nature Communications | 2024 | 36 | [Rockfish: A transformer-based model for accurate 5-methylcytosine prediction from nanopore sequencing](https://doi.org/10.1038/s41467-024-49847-0) |
| DeepBAM | Nanopore | Briefings in Bioinformatics | 2024 | 14 | [DeepBAM: a high-accuracy single-molecule CpG methylation detection tool for Oxford nanopore sequencing](https://doi.org/10.1093/bib/bbae413) |
| [Dorado](https://github.com/nanoporetech/dorado) | Nanopore | – | – | – | – |
| [Megalodon](https://github.com/nanoporetech/megalodon) | Nanopore | – | – | – | – |

### QC, preprocessing & normalization

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| ComBat | Array (Infinium) | Biostatistics | 2007 | 8,433 | [Adjusting batch effects in microarray expression data using empirical Bayes methods](https://doi.org/10.1093/biostatistics/kxj037) |
| sva | Array (Infinium) | Bioinformatics | 2012 | 6,140 | [The sva package for removing batch effects and other unwanted variation in high-throughput experiments](https://doi.org/10.1093/bioinformatics/bts034) |
| minfi | Array (Infinium) | Bioinformatics | 2014 | 4,271 | [Minfi: a flexible and comprehensive Bioconductor package for the analysis of Infinium DNA methylation microarrays](https://doi.org/10.1093/bioinformatics/btu049) |
| lumi | Array (Infinium) | Bioinformatics | 2008 | 1,905 | [lumi : a pipeline for processing Illumina microarray](https://doi.org/10.1093/bioinformatics/btn224) |
| BMIQ | Array (Infinium) | Bioinformatics | 2013 | 1,562 | [A beta-mixture quantile normalization method for correcting probe design bias in Illumina Infinium 450 k DNA methylation data](https://doi.org/10.1093/bioinformatics/bts680) |
| wateRmelon | Array (Infinium) | BMC Genomics | 2013 | 1,088 | [A data-driven approach to preprocessing Illumina 450K methylation array data](https://doi.org/10.1186/1471-2164-14-293) |
| ChAMP | Array (Infinium) | Bioinformatics | 2017 | 978 | [ChAMP: updated methylation analysis pipeline for Illumina BeadChips](https://doi.org/10.1093/bioinformatics/btx513) |
| noob | Array (Infinium) | Nucleic Acids Research | 2013 | 862 | [Low-level processing of Illumina Infinium DNA Methylation BeadArrays](https://doi.org/10.1093/nar/gkt090) |
| missMethyl | Array (Infinium) | Bioinformatics | 2016 | 842 | [missMethyl: an R package for analyzing data from Illumina’s HumanMethylation450 platform](https://doi.org/10.1093/bioinformatics/btv560) |
| Funnorm | Array (Infinium) | Genome Biology | 2014 | 772 | [Functional normalization of 450k methylation array data improves replication in large cancer studies](https://doi.org/10.1186/s13059-014-0503-2) |
| SWAN | Array (Infinium) | Genome Biology | 2012 | 729 | [SWAN: Subset-quantile Within Array Normalization for Illumina Infinium HumanMethylation450 BeadChips](https://doi.org/10.1186/gb-2012-13-6-r44) |
| Batman | Enrichment (MeDIP / MBD) | Nature Biotechnology | 2008 | 557 | [A Bayesian deconvolution strategy for immunoprecipitation-based DNA methylome analysis](https://doi.org/10.1038/nbt1414) |
| ENmix | Array (Infinium) | Nucleic Acids Research | 2016 | 411 | [ENmix: a novel background correction method for Illumina HumanMethylation450 BeadChip](https://doi.org/10.1093/nar/gkv907) |
| RnBeads 2.0 | Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2019 | 339 | [RnBeads 2.0: comprehensive analysis of DNA methylation data](https://doi.org/10.1186/s13059-019-1664-9) |
| SeSAMe | Array (Infinium) | Nucleic Acids Research | 2018 | 315 | [SeSAMe: reducing artifactual detection of DNA methylation by Infinium BeadChips in genomic deletions](https://doi.org/10.1093/nar/gky691) |
| meffil | Array (Infinium) | Bioinformatics | 2018 | 314 | [Meffil: efficient normalization and analysis of very large DNA methylation datasets](https://doi.org/10.1093/bioinformatics/bty476) |
| IMA | Array (Infinium) | Bioinformatics | 2012 | 259 | [IMA: an R package for high-throughput analysis of Illumina's 450K Infinium methylation data](https://doi.org/10.1093/bioinformatics/bts013) |
| MethylAid | Array (Infinium) | Bioinformatics | 2014 | 170 | [MethylAid: visual and interactive quality control of large Illumina 450k datasets](https://doi.org/10.1093/bioinformatics/btu566) |
| ewastools | Array (Infinium) | Clinical Epigenetics | 2018 | 154 | [Identifying mislabeled and contaminated DNA methylation microarray data: an extended quality control toolset with examples from GEO](https://doi.org/10.1186/s13148-018-0504-1) |
| RELIC | Array (Infinium) | BMC Genomics | 2017 | 139 | [RELIC: a novel dye-bias correction method for Illumina Methylation BeadChip](https://doi.org/10.1186/s12864-016-3426-3) |
| shinyMethyl | Array (Infinium) | F1000Research | 2014 | 112 | [shinyMethyl: interactive quality control of Illumina 450k DNA methylation arrays in R](https://doi.org/10.12688/f1000research.4680.2) |
| RUVm | Array (Infinium) | Nucleic Acids Research | 2015 | 86 | [Removing unwanted variation in a differential methylation analysis of Illumina HumanMethylation450 array data](https://doi.org/10.1093/nar/gkv526) |
| BSeQC | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2013 | 46 | [BSeQC: quality control of bisulfite sequencing experiments](https://doi.org/10.1093/bioinformatics/btt548) |
| [Trim Galore](https://github.com/FelixKrueger/TrimGalore) | Short-read (WGBS / RRBS / EM-seq) | – | – | – | – |

### Differential methylation

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| limma | Array (Infinium) | Nucleic Acids Research | 2015 | 39,809 | [limma powers differential expression analyses for RNA-sequencing and microarray studies](https://doi.org/10.1093/nar/gkv007) |
| methylKit | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2012 | 2,186 | [methylKit: a comprehensive R package for the analysis of genome-wide DNA methylation profiles](https://doi.org/10.1186/gb-2012-13-10-r87) |
| DMRcate | Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Epigenetics & Chromatin | 2015 | 915 | [De novo identification of differentially methylated regions in the human genome](https://doi.org/10.1186/1756-8935-8-6) |
| bsseq (BSmooth) | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2012 | 787 | [BSmooth: from whole genome bisulfite sequencing reads to differentially methylated regions](https://doi.org/10.1186/gb-2012-13-10-r83) |
| bumphunter | Array (Infinium) | International Journal of Epidemiology | 2012 | 660 | [Bump hunting to identify differentially methylated regions in epigenetic epidemiology studies](https://doi.org/10.1093/ije/dyr238) |
| DSS | Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2014 | 567 | [A Bayesian hierarchical model to detect differentially methylated loci from single nucleotide resolution sequencing data](https://doi.org/10.1093/nar/gku154) |
| DSS (general design) | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2016 | 518 | [Differential methylation analysis for BS-seq data under general experimental design](https://doi.org/10.1093/bioinformatics/btw026) |
| metilene | Short-read (WGBS / RRBS / EM-seq) | Genome Research | 2016 | 512 | [metilene: fast and sensitive calling of differentially methylated regions from bisulfite sequencing data](https://doi.org/10.1101/gr.196394.115) |
| comb-p | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Bioinformatics | 2012 | 440 | [Comb-p: software for combining, analyzing, grouping and correcting spatially correlated P -values](https://doi.org/10.1093/bioinformatics/bts545) |
| MEDIPS | Enrichment (MeDIP / MBD) | Bioinformatics | 2014 | 309 | [MEDIPS: genome-wide differential coverage analysis of sequencing data derived from DNA enrichment experiments](https://doi.org/10.1093/bioinformatics/btt650) |
| BiSeq | Short-read (WGBS / RRBS / EM-seq), Targeted / amplicon | Bioinformatics | 2013 | 242 | [Detection of significantly differentially methylated regions in targeted bisulfite sequencing data](https://doi.org/10.1093/bioinformatics/btt263) |
| methylSig | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2014 | 210 | [MethylSig: a whole genome DNA methylation analysis pipeline](https://doi.org/10.1093/bioinformatics/btu339) |
| RADMeth | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2014 | 182 | [Using beta-binomial regression for high-precision differential methylation analysis in multifactor whole-genome bisulfite sequencing experiments](https://doi.org/10.1186/1471-2105-15-215) |
| dmrseq | Short-read (WGBS / RRBS / EM-seq) | Biostatistics | 2019 | 173 | [Detection and accurate false discovery rate control of differentially methylated regions from whole genome bisulfite sequencing](https://doi.org/10.1093/biostatistics/kxy007) |
| Probe Lasso | Array (Infinium) | Methods | 2015 | 123 | [Probe Lasso: A novel method to rope in differentially methylated regions with 450K DNA methylation data](https://doi.org/10.1016/j.ymeth.2014.10.036) |
| MACAU | Short-read (WGBS / RRBS / EM-seq) | PLOS Genetics | 2015 | 115 | [A Flexible, Efficient Binomial Mixed Model for Identifying Differential DNA Methylation in Bisulfite Sequencing Data](https://doi.org/10.1371/journal.pgen.1005650) |
| edgeR (methylation) | Short-read (WGBS / RRBS / EM-seq) | F1000Research | 2017 | 86 | [Differential methylation analysis of reduced representation bisulfite sequencing experiments using edgeR](https://doi.org/10.12688/f1000research.13196.1) |
| DMRfinder | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2017 | 77 | [DMRfinder: efficiently identifying differentially methylated regions from MethylC-seq data](https://doi.org/10.1186/s12859-017-1909-0) |
| DMRcaller | Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2018 | 66 | [DMRcaller: a versatile R/Bioconductor package for detection and visualization of differentially methylated regions in CpG and non-CpG contexts](https://doi.org/10.1093/nar/gky602) |
| mCSEA | Array (Infinium) | Bioinformatics | 2019 | 59 | [mCSEA: detecting subtle differentially methylated regions](https://doi.org/10.1093/bioinformatics/btz096) |
| ipDMR | Array (Infinium) | Bioinformatics | 2021 | 55 | [ipDMR: identification of differentially methylated regions with interval P-values](https://doi.org/10.1093/bioinformatics/btaa732) |
| QSEA | Enrichment (MeDIP / MBD) | Nucleic Acids Research | 2017 | 55 | [QSEA—modelling of genome-wide DNA methylation from sequencing enrichment experiments](https://doi.org/10.1093/nar/gkw1193) |
| swDMR | Short-read (WGBS / RRBS / EM-seq) | PLOS ONE | 2015 | 43 | [swDMR: A Sliding Window Approach to Identify Differentially Methylated Regions Based on Whole Genome Bisulfite Sequencing](https://doi.org/10.1371/journal.pone.0132866) |
| coMethDMR | Array (Infinium) | Nucleic Acids Research | 2019 | 42 | [coMethDMR: accurate identification of co-methylated and differentially methylated regions in epigenome-wide association studies with continuous phenotypes](https://doi.org/10.1093/nar/gkz590) |
| HOME | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2019 | 38 | [HOME: a histogram based machine learning approach for effective identification of differentially methylated regions](https://doi.org/10.1186/s12859-019-2845-y) |
| Defiant | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2018 | 37 | [Defiant: (DMRs: easy, fast, identification and ANnoTation) identifies differentially Methylated regions from iron-deficient rat hippocampus](https://doi.org/10.1186/s12859-018-2037-1) |
| CpGtools | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Bioinformatics | 2021 | 36 | [CpGtools: a python package for DNA methylation analysis](https://doi.org/10.1093/bioinformatics/btz916) |
| pycoMeth | Nanopore | Genome Biology | 2023 | 14 | [pycoMeth: a toolbox for differential methylation testing from Nanopore methylation calls](https://doi.org/10.1186/s13059-023-02917-w) |
| MethylC-analyzer | Short-read (WGBS / RRBS / EM-seq) | Botanical Studies | 2023 | 7 | [MethylC-analyzer: a comprehensive downstream pipeline for the analysis of genome-wide DNA methylation](https://doi.org/10.1186/s40529-022-00366-5) |

### Methylome segmentation

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| MethylSeekR | Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2013 | 237 | [Identification of active regulatory regions from DNA methylation data](https://doi.org/10.1093/nar/gkt599) |

### Cell-type deconvolution

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| Houseman method | Array (Infinium) | BMC Bioinformatics | 2012 | 3,075 | [DNA methylation arrays as surrogate measures of cell mixture distribution](https://doi.org/10.1186/1471-2105-13-86) |
| EpiDISH | Array (Infinium) | BMC Bioinformatics | 2017 | 542 | [A comparison of reference-based algorithms for correcting cell-type heterogeneity in Epigenome-Wide Association Studies](https://doi.org/10.1186/s12859-017-1511-5) |
| FlowSorted.Blood.EPIC | Array (Infinium) | Genome Biology | 2018 | 417 | [An optimized library for reference-based deconvolution of whole-blood biospecimens assayed using the Illumina HumanMethylationEPIC BeadArray](https://doi.org/10.1186/s13059-018-1448-7) |
| CellDMC | Array (Infinium) | Nature Methods | 2018 | 325 | [Identification of differentially methylated cell types in epigenome-wide association studies](https://doi.org/10.1038/s41592-018-0213-x) |
| MethylCIBERSORT | Array (Infinium) | Nature Communications | 2018 | 278 | [Pan-cancer deconvolution of tumour composition using DNA methylation](https://doi.org/10.1038/s41467-018-05570-1) |
| RefFreeEWAS | Array (Infinium) | BMC Bioinformatics | 2016 | 255 | [Reference-free deconvolution of DNA methylation data and mediation by cell composition effects](https://doi.org/10.1186/s12859-016-1140-4) |
| IDOL | Array (Infinium) | BMC Bioinformatics | 2016 | 199 | [Improving cell mixture deconvolution by identifying optimal DNA methylation libraries (IDOL)](https://doi.org/10.1186/s12859-016-0943-7) |
| TCA | Array (Infinium) | Nature Communications | 2019 | 150 | [Cell-type-specific resolution epigenetics without the need for cell sorting or single-cell biology](https://doi.org/10.1038/s41467-019-11052-9) |
| EPISCORE | Array (Infinium) | Genome Biology | 2020 | 121 | [EPISCORE: cell type deconvolution of bulk tissue DNA methylomes from single-cell RNA-Seq data](https://doi.org/10.1186/s13059-020-02126-9) |
| scMD | Array (Infinium), Short-read (WGBS / RRBS / EM-seq), Single-cell | Communications Biology | 2024 | 110 | [scMD facilitates cell type deconvolution using single-cell DNA methylation references](https://doi.org/10.1038/s42003-023-05690-5) |
| EDec | Array (Infinium) | Cell Reports | 2016 | 101 | [Epigenomic Deconvolution of Breast Tumors Reveals Metabolic Coupling between Constituent Cell Types](https://doi.org/10.1016/j.celrep.2016.10.057) |
| MeDeCom | Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2017 | 98 | [MeDeCom: discovery and quantification of latent components of heterogeneous methylomes](https://doi.org/10.1186/s13059-017-1182-6) |
| MethylResolver | Array (Infinium) | Communications Biology | 2020 | 81 | [MethylResolver—a method for deconvoluting bulk DNA methylation profiles into known and unknown cell contents](https://doi.org/10.1038/s42003-020-01146-2) |
| BayesCCE | Array (Infinium) | Genome Biology | 2018 | 54 | [BayesCCE: a Bayesian framework for estimating cell-type composition from DNA methylation without the need for methylation reference](https://doi.org/10.1186/s13059-018-1513-2) |
| HiTIMED | Array (Infinium) | Journal of Translational Medicine | 2022 | 42 | [HiTIMED: hierarchical tumor immune microenvironment epigenetic deconvolution for accurate cell type resolution in the tumor microenvironment using tumor-type-specific DNA methylation data](https://doi.org/10.1186/s12967-022-03736-6) |
| methylCC | Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2019 | 29 | [methylCC: technology-independent estimation of cell type composition using differentially methylated regions](https://doi.org/10.1186/s13059-019-1827-8) |
| HiBED | Array (Infinium) | Frontiers in Neuroscience | 2023 | 19 | [Hierarchical deconvolution for extensive cell type resolution in the human brain using DNA methylation](https://doi.org/10.3389/fnins.2023.1198243) |
| ARIC | Array (Infinium) | Briefings in Bioinformatics | 2022 | 19 | [ARIC: accurate and robust inference of cell type proportions from bulk gene expression or DNA methylation data](https://doi.org/10.1093/bib/bbab362) |
| EMeth | Array (Infinium) | Scientific Reports | 2021 | 17 | [EMeth: An EM algorithm for cell type decomposition based on DNA methylation data](https://doi.org/10.1038/s41598-021-84864-9) |
| PRISM | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2019 | 14 | [PRISM: methylation pattern-based, reference-free inference of subclonal makeup](https://doi.org/10.1093/bioinformatics/btz327) |

### Epigenetic clocks & aging

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| Horvath clock | Array (Infinium) | Genome Biology | 2013 | 6,877 | [DNA methylation age of human tissues and cell types](https://doi.org/10.1186/gb-2013-14-10-r115) |
| Hannum clock | Array (Infinium) | Molecular Cell | 2013 | 4,300 | [Genome-wide Methylation Profiles Reveal Quantitative Views of Human Aging Rates](https://doi.org/10.1016/j.molcel.2012.10.016) |
| PhenoAge | Array (Infinium) | Aging | 2018 | 3,679 | [An epigenetic biomarker of aging for lifespan and healthspan](https://doi.org/10.18632/aging.101414) |
| GrimAge | Array (Infinium) | Aging | 2019 | 2,513 | [DNA methylation GrimAge strongly predicts lifespan and healthspan](https://doi.org/10.18632/aging.101684) |
| DunedinPACE | Array (Infinium) | eLife | 2022 | 1,206 | [DunedinPACE, a DNA methylation biomarker of the pace of aging](https://doi.org/10.7554/elife.73420) |
| Skin & Blood clock | Array (Infinium) | Aging | 2018 | 830 | [Epigenetic clock for skin and blood cells applied to Hutchinson Gilford Progeria Syndrome and ex vivo studies](https://doi.org/10.18632/aging.101508) |
| PC clocks | Array (Infinium) | Nature Aging | 2022 | 512 | [A computational solution for bolstering reliability of epigenetic clocks: implications for clinical trials and longitudinal tracking](https://doi.org/10.1038/s43587-022-00248-2) |
| Zhang clock | Array (Infinium) | Genome Medicine | 2019 | 489 | [Improved precision of epigenetic clock estimates across tissues and its implication for biological ageing](https://doi.org/10.1186/s13073-019-0667-1) |
| Universal mammalian clock | Array (Infinium) | Nature Aging | 2023 | 416 | [Universal DNA methylation age across mammalian tissues](https://doi.org/10.1038/s43587-023-00462-6) |
| DNAmTL | Array (Infinium) | Aging | 2019 | 406 | [DNA methylation-based estimator of telomere length](https://doi.org/10.18632/aging.102173) |
| epiTOC | Array (Infinium) | Genome Biology | 2016 | 331 | [Correlation of an epigenetic mitotic clock with cancer risk](https://doi.org/10.1186/s13059-016-1064-3) |
| PedBE clock | Array (Infinium) | Proceedings of the National Academy of Sciences | 2020 | 282 | [The PedBE clock accurately estimates DNA methylation age in pediatric buccal cells](https://doi.org/10.1073/pnas.1820843116) |
| methylclock | Array (Infinium) | Bioinformatics | 2021 | 236 | [methylclock : a Bioconductor package to estimate DNA methylation age](https://doi.org/10.1093/bioinformatics/btaa825) |
| Causal clocks (DamAge/AdaptAge) | Array (Infinium) | Nature Aging | 2024 | 230 | [Causality-enriched epigenetic age uncouples damage and adaptation](https://doi.org/10.1038/s43587-023-00557-0) |
| GrimAge2 | Array (Infinium) | Aging | 2022 | 217 | [DNA methylation GrimAge version 2](https://doi.org/10.18632/aging.204434) |
| epiTOC2 | Array (Infinium) | Genome Medicine | 2020 | 163 | [A comparison of epigenetic mitotic-like clocks for cancer risk prediction](https://doi.org/10.1186/s13073-020-00752-3) |
| AltumAge | Array (Infinium) | npj Aging | 2022 | 152 | [A pan-tissue DNA-methylation epigenetic clock based on deep learning](https://doi.org/10.1038/s41514-022-00085-y) |
| scAge | Single-cell | Nature Aging | 2021 | 143 | [Profiling epigenetic age in single cells](https://doi.org/10.1038/s43587-021-00134-3) |
| Biolearn | Array (Infinium) | Nature Aging | 2025 | 36 | [A unified framework for systematic curation and evaluation of aging biomarkers](https://doi.org/10.1038/s43587-025-00987-y) |
| pyaging | Array (Infinium) | Bioinformatics | 2024 | 31 | [pyaging : a Python-based compendium of GPU-optimized aging clocks](https://doi.org/10.1093/bioinformatics/btae200) |

### Cancer classification & diagnostics

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| MNP brain tumour classifier | Array (Infinium) | Nature | 2018 | 2,898 | [DNA methylation-based classification of central nervous system tumours](https://doi.org/10.1038/nature26000) |
| Sarcoma classifier | Array (Infinium) | Nature Communications | 2021 | 524 | [Sarcoma classification by DNA methylation profiling](https://doi.org/10.1038/s41467-020-20603-4) |
| EPICUP | Array (Infinium) | The Lancet Oncology | 2016 | 473 | [Epigenetic profiling to classify cancer of unknown primary: a multicentre, retrospective analysis](https://doi.org/10.1016/s1470-2045(16)30297-2) |
| Sturgeon | Nanopore | Nature | 2023 | 229 | [Ultra-fast deep-learned CNS tumour classification during surgery](https://doi.org/10.1038/s41586-023-06615-2) |
| NanoDx (same-day diagnosis) | Nanopore | Acta Neuropathologica | 2017 | 198 | [Same-day genomic and epigenomic diagnosis of brain tumors using real-time nanopore sequencing](https://doi.org/10.1007/s00401-017-1743-5) |
| ML workflows for methylation classifiers (Maros) | Array (Infinium) | Nature Protocols | 2020 | 118 | [Machine learning workflows to estimate class probabilities for precision cancer diagnostics on DNA methylation microarray data](https://doi.org/10.1038/s41596-019-0251-6) |
| nanoDx | Nanopore | Neuropathology and Applied Neurobiology | 2023 | 78 | [Robust methylation‐based classification of brain tumours using nanopore sequencing](https://doi.org/10.1111/nan.12856) |
| Rapid-CNS2 | Nanopore | Acta Neuropathologica | 2022 | 78 | [Rapid-CNS2: rapid comprehensive adaptive nanopore-sequencing of CNS tumors, a proof-of-concept study](https://doi.org/10.1007/s00401-022-02415-6) |
| MethyLYZR | Nanopore | Nature Medicine | 2025 | 49 | [Rapid brain tumor classification from sparse epigenomic data](https://doi.org/10.1038/s41591-024-03435-3) |
| crossNN | Nanopore, Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Nature Cancer | 2025 | 34 | [crossNN is an explainable framework for cross-platform DNA methylation-based classification of tumors](https://doi.org/10.1038/s43018-025-00976-5) |
| MethylBERT | Short-read (WGBS / RRBS / EM-seq), cfDNA | Nature Communications | 2025 | 21 | [MethylBERT enables read-level DNA methylation pattern identification and tumour deconvolution using a Transformer-based model](https://doi.org/10.1038/s41467-025-55920-z) |
| mepylome | Array (Infinium) | Advanced Intelligent Systems | 2026 | 4 | [Mepylome: A Point‐of‐Care Tumor Diagnostic Toolkit for Tumor DNA Methylation and Copy Number Analysis](https://doi.org/10.1002/aisy.202500778) |

### cfDNA & tissue of origin

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| meth_atlas | Array (Infinium), cfDNA | Nature Communications | 2018 | 1,025 | [Comprehensive human cell-type methylation atlas reveals origins of circulating cell-free DNA in health and disease](https://doi.org/10.1038/s41467-018-07466-6) |
| cfMeDIP-seq classifier | Enrichment (MeDIP / MBD), cfDNA | Nature | 2018 | 910 | [Sensitive tumour detection and classification using plasma cell-free DNA methylomes](https://doi.org/10.1038/s41586-018-0703-0) |
| Plasma DNA tissue mapping | Short-read (WGBS / RRBS / EM-seq), cfDNA | Proceedings of the National Academy of Sciences | 2015 | 712 | [Plasma DNA tissue mapping by genome-wide methylation sequencing for noninvasive prenatal, cancer, and transplantation assessments](https://doi.org/10.1073/pnas.1508736112) |
| MONOD2 (methylation haplotype blocks) | Short-read (WGBS / RRBS / EM-seq), cfDNA | Nature Genetics | 2017 | 517 | [Identification of methylation haplotype blocks aids in deconvolution of heterogeneous tissue samples and tumor tissue-of-origin mapping from plasma DNA](https://doi.org/10.1038/ng.3805) |
| CancerLocator | Short-read (WGBS / RRBS / EM-seq), cfDNA | Genome Biology | 2017 | 249 | [CancerLocator: non-invasive cancer diagnosis and tissue-of-origin prediction using methylation profiles of cell-free DNA](https://doi.org/10.1186/s13059-017-1191-5) |
| CancerDetector | Short-read (WGBS / RRBS / EM-seq), cfDNA | Nucleic Acids Research | 2018 | 193 | [CancerDetector: ultrasensitive and non-invasive cancer detection at the resolution of individual reads using cell-free DNA methylation sequencing data](https://doi.org/10.1093/nar/gky423) |
| CelFiE | Short-read (WGBS / RRBS / EM-seq), cfDNA | Nature Communications | 2021 | 84 | [Comprehensive cell type decomposition of circulating cell-free DNA with CelFiE](https://doi.org/10.1038/s41467-021-22901-x) |
| cfSort | Short-read (WGBS / RRBS / EM-seq), cfDNA | Proceedings of the National Academy of Sciences | 2023 | 72 | [Comprehensive tissue deconvolution of cell-free DNA by deep learning for disease diagnosis and monitoring](https://doi.org/10.1073/pnas.2305236120) |
| DISMIR | Short-read (WGBS / RRBS / EM-seq), cfDNA | Briefings in Bioinformatics | 2021 | 62 | [DISMIR: D eep learning-based noninvasive cancer detection by i ntegrating DNA s equence and methylation information of i ndividual cell-free DNA r eads](https://doi.org/10.1093/bib/bbab250) |
| CelFEER | Short-read (WGBS / RRBS / EM-seq), cfDNA | NAR Genomics and Bioinformatics | 2023 | 23 | [Cell type deconvolution of methylated cell-free DNA at the resolution of individual reads](https://doi.org/10.1093/nargab/lqad048) |

### Tumor purity & copy number

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| LUMP | Array (Infinium) | Nature Communications | 2015 | 1,167 | [Systematic pan-cancer analysis of tumour purity](https://doi.org/10.1038/ncomms9971) |
| InfiniumPurify | Array (Infinium) | Genome Biology | 2017 | 121 | [Estimating and accounting for tumor purity in the analysis of DNA methylation data from cancer studies](https://doi.org/10.1186/s13059-016-1143-5) |
| conumee 2.0 | Array (Infinium) | Bioinformatics | 2024 | 106 | [Conumee 2.0: enhanced copy-number variation analysis from DNA methylation arrays for humans and mice](https://doi.org/10.1093/bioinformatics/btae029) |
| MethylPurify | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2014 | 89 | [MethylPurify: tumor purity deconvolution and differential methylation detection from single tumor DNA methylomes](https://doi.org/10.1186/s13059-014-0419-x) |
| RF_Purify | Array (Infinium) | BMC Bioinformatics | 2019 | 57 | [RF_Purify: a novel tool for comprehensive analysis of tumor-purity in methylation array data based on random forest regression](https://doi.org/10.1186/s12859-019-3014-z) |
| PAMES | Array (Infinium) | Bioinformatics | 2018 | 44 | [Tumor purity quantification by clonal DNA methylation signatures](https://doi.org/10.1093/bioinformatics/bty011) |
| cnAnalysis450k | Array (Infinium) | Bioinformatics | 2017 | 14 | [cnAnalysis450k: an R package for comparative analysis of 450k/EPIC Illumina methylation array derived copy number data](https://doi.org/10.1093/bioinformatics/btx156) |

### Allele-specific, haplotype & heterogeneity

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| PDR (proportion of discordant reads) | Short-read (WGBS / RRBS / EM-seq) | Cancer Cell | 2014 | 393 | [Locally Disordered Methylation Forms the Basis of Intratumor Methylome Variation in Chronic Lymphocytic Leukemia](https://doi.org/10.1016/j.ccell.2014.10.012) |
| Epipolymorphism | Short-read (WGBS / RRBS / EM-seq) | Nature Genetics | 2012 | 293 | [Epigenetic polymorphism and the stochastic formation of differentially methylated regions in normal and cancerous tissues](https://doi.org/10.1038/ng.2442) |
| informME | Short-read (WGBS / RRBS / EM-seq) | Nature Genetics | 2017 | 156 | [Potential energy landscapes identify the information-theoretic nature of the epigenome](https://doi.org/10.1038/ng.3811) |
| amrfinder | Short-read (WGBS / RRBS / EM-seq) | Proceedings of the National Academy of Sciences | 2012 | 110 | [Genomic landscape of human allele-specific DNA methylation](https://doi.org/10.1073/pnas.1201310109) |
| NanoMethPhase | Nanopore | Genome Biology | 2021 | 82 | [Megabase-scale methylation phasing using nanopore long reads and NanoMethPhase](https://doi.org/10.1186/s13059-021-02283-5) |
| methclone | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2014 | 64 | [Dynamic evolution of clonal epialleles revealed by methclone](https://doi.org/10.1186/s13059-014-0472-5) |
| CluBCpG | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2020 | 34 | [Identification of cell type-specific methylation signals in bulk whole genome bisulfite sequencing data](https://doi.org/10.1186/s13059-020-02065-5) |
| MethPhaser | Nanopore | Nature Communications | 2024 | 30 | [MethPhaser: methylation-based long-read haplotype phasing of human genomes](https://doi.org/10.1038/s41467-024-49588-0) |
| DMEAS | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2013 | 22 | [DMEAS: DNA methylation entropy analysis software](https://doi.org/10.1093/bioinformatics/btt332) |
| DAMEfinder | Short-read (WGBS / RRBS / EM-seq) | Epigenetics & Chromatin | 2020 | 19 | [DAMEfinder: a method to detect differential allele-specific methylation](https://doi.org/10.1186/s13072-020-00346-8) |
| mHapTk | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2022 | 16 | [mHapTk: a comprehensive toolkit for the analysis of DNA methylation haplotypes](https://doi.org/10.1093/bioinformatics/btac650) |
| Metheor | Short-read (WGBS / RRBS / EM-seq) | PLOS Computational Biology | 2023 | 14 | [Metheor: Ultrafast DNA methylation heterogeneity calculation from bisulfite read alignments](https://doi.org/10.1371/journal.pcbi.1010946) |
| MethHaplo | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2020 | 12 | [MethHaplo: combining allele-specific DNA methylation and SNPs for haplotype region identification](https://doi.org/10.1186/s12859-020-03798-7) |

### Variant calling from bisulfite data

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| Bis-SNP | Short-read (WGBS / RRBS / EM-seq) | Genome Biology | 2012 | 262 | [Bis-SNP: Combined DNA methylation and SNP calling for Bisulfite-seq data](https://doi.org/10.1186/gb-2012-13-7-r61) |
| CGmapTools | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2018 | 208 | [CGmapTools improves the precision of heterozygous SNV calls and supports allele-specific methylation detection and visualization in bisulfite-sequencing data](https://doi.org/10.1093/bioinformatics/btx595) |
| BS-SNPer | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2015 | 88 | [BS-SNPer: SNP calling in bisulfite-seq data](https://doi.org/10.1093/bioinformatics/btv507) |
| MethylExtract | Short-read (WGBS / RRBS / EM-seq) | F1000Research | 2013 | 46 | [MethylExtract: High-Quality methylation maps and SNV calling from whole genome bisulfite sequencing data](https://doi.org/10.12688/f1000research.2-217.v1) |
| Revelio | Short-read (WGBS / RRBS / EM-seq) | BMC Genomics | 2022 | 19 | [Manipulating base quality scores enables variant calling from bisulfite sequencing alignments using conventional bayesian approaches](https://doi.org/10.1186/s12864-022-08691-6) |

### Imputation & prediction

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| DeepCpG | Single-cell | Genome Biology | 2017 | 443 | [DeepCpG: accurate prediction of single-cell DNA methylation states using deep learning](https://doi.org/10.1186/s13059-017-1189-z) |
| methylCRF | Enrichment (MeDIP / MBD) | Genome Research | 2013 | 145 | [Estimating absolute methylation levels at single-CpG resolution from methylation enrichment and restriction enzyme sequencing methods](https://doi.org/10.1101/gr.152231.112) |
| methyLImp | Array (Infinium) | Bioinformatics | 2019 | 68 | [Missing value estimation methods for DNA methylation data](https://doi.org/10.1093/bioinformatics/btz134) |
| BoostMe | Short-read (WGBS / RRBS / EM-seq) | BMC Genomics | 2018 | 43 | [BoostMe accurately predicts DNA methylation values in whole-genome bisulfite sequencing of multiple human tissues](https://doi.org/10.1186/s12864-018-4766-y) |
| methyLImp2 | Array (Infinium) | Bioinformatics | 2024 | 15 | [methyLImp2: faster missing value estimation for DNA methylation data](https://doi.org/10.1093/bioinformatics/btae001) |
| CaMelia | Single-cell | Bioinformatics | 2021 | 14 | [CaMelia: imputation in single-cell methylomes based on local similarities between cells](https://doi.org/10.1093/bioinformatics/btab029) |

### Single-cell clustering & analysis

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| ALLCools | Single-cell | Nature | 2021 | 318 | [DNA methylation atlas of the mouse brain at single-cell resolution](https://doi.org/10.1038/s41586-020-03182-8) |
| EpiScanpy | Single-cell | Nature Communications | 2021 | 138 | [EpiScanpy: integrated single-cell epigenomic analysis](https://doi.org/10.1038/s41467-021-25131-3) |
| PDclust | Single-cell | Stem Cell Reports | 2018 | 98 | [High-Resolution Single-Cell DNA Methylation Measurements Reveal Epigenetically Distinct Hematopoietic Stem Cell Subpopulations](https://doi.org/10.1016/j.stemcr.2018.07.003) |
| Melissa | Single-cell | Genome Biology | 2019 | 66 | [Melissa: Bayesian clustering and imputation of single-cell methylomes](https://doi.org/10.1186/s13059-019-1665-8) |
| MethSCAn | Single-cell | Nature Methods | 2024 | 32 | [Analyzing single-cell bisulfite sequencing data with MethSCAn](https://doi.org/10.1038/s41592-024-02347-x) |
| scMET | Single-cell | Genome Biology | 2021 | 30 | [scMET: Bayesian modeling of DNA methylation heterogeneity at single-cell resolution](https://doi.org/10.1186/s13059-021-02329-8) |
| Epiclomal | Single-cell | PLOS Computational Biology | 2020 | 28 | [Epiclomal: Probabilistic clustering of sparse single-cell DNA methylation data](https://doi.org/10.1371/journal.pcbi.1008270) |
| BPRMeth | Single-cell, Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2018 | 16 | [BPRMeth: a flexible Bioconductor package for modelling methylation profiles](https://doi.org/10.1093/bioinformatics/bty129) |
| scMelody | Single-cell | Frontiers in Bioengineering and Biotechnology | 2022 | 6 | [scMelody: An Enhanced Consensus-Based Clustering Model for Single-Cell Methylation Data by Reconstructing Cell-to-Cell Similarity](https://doi.org/10.3389/fbioe.2022.842019) |
| SINBAD | Single-cell | bioRxiv (preprint) | 2021 | 4 | [SINBAD: a flexible tool for single cell DNA methylation data](https://doi.org/10.1101/2021.10.23.465577) |
| vmrseq | Single-cell | Genome Biology | 2024 | 3 | [vmrseq: probabilistic modeling of single-cell methylation heterogeneity](https://doi.org/10.1186/s13059-024-03457-7) |
| Amethyst | Single-cell | Communications Biology | 2025 | 1 | [Single-cell DNA methylation analysis tool Amethyst resolves distinct non-CG methylation patterns in human astrocytes and oligodendrocytes](https://doi.org/10.1038/s42003-025-08859-2) |
| MethScope | Single-cell, Spatial, Short-read (WGBS / RRBS / EM-seq) | CRAN: Contributed Packages | 2025 | 0 | [MethScope: Ultra-Fast Analysis of Sparse DNA Methylome via Recurrent Pattern Encoding](https://doi.org/10.32614/cran.package.methscope) |
| [MethylVI](https://openreview.net/forum?id=Mg2DM0F3AY) | Single-cell | NeurIPS GenBio Workshop | 2023 | – | – |

### Multi-omics integration

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| LIGER | Single-cell | Cell | 2019 | 1,334 | [Single-Cell Multi-omic Integration Compares and Contrasts Features of Brain Cell Identity](https://doi.org/10.1016/j.cell.2019.05.006) |
| MOFA+ | Single-cell | Genome Biology | 2020 | 1,195 | [MOFA+: a statistical framework for comprehensive integration of multi-modal single-cell data](https://doi.org/10.1186/s13059-020-02015-1) |
| GLUE | Single-cell | Nature Biotechnology | 2022 | 661 | [Multi-omics single-cell data integration and regulatory inference with graph-linked embedding](https://doi.org/10.1038/s41587-022-01284-4) |
| scAI | Single-cell | Genome Biology | 2020 | 176 | [scAI: an unsupervised approach for the integrative analysis of parallel single-cell transcriptomic and epigenomic profiles](https://doi.org/10.1186/s13059-020-1932-8) |
| ELMER | Array (Infinium) | Bioinformatics | 2019 | 118 | [ELMER v.2: an R/Bioconductor package to reconstruct gene regulatory networks from DNA methylation and transcriptome profiles](https://doi.org/10.1093/bioinformatics/bty902) |
| MethylMix | Array (Infinium) | Bioinformatics | 2015 | 114 | [MethylMix: an R package for identifying DNA methylation-driven genes](https://doi.org/10.1093/bioinformatics/btv020) |
| MAPLE | Single-cell | Genome Research | 2021 | 18 | [Predictive modeling of single-cell DNA methylome data enhances integration with transcriptome data](https://doi.org/10.1101/gr.267047.120) |

### Enrichment & functional interpretation

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| GREAT | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Nature Biotechnology | 2010 | 4,661 | [GREAT improves functional interpretation of cis-regulatory regions](https://doi.org/10.1038/nbt.1630) |
| annotatr | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Bioinformatics | 2017 | 501 | [annotatr: genomic regions in context](https://doi.org/10.1093/bioinformatics/btx183) |
| LOLA | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Bioinformatics | 2016 | 481 | [LOLA: enrichment analysis for genomic region sets and regulatory elements in R and Bioconductor](https://doi.org/10.1093/bioinformatics/btv612) |
| methylGSA | Array (Infinium) | Bioinformatics | 2019 | 193 | [methylGSA: a Bioconductor package and Shiny app for DNA methylation data length bias adjustment in gene set testing](https://doi.org/10.1093/bioinformatics/bty892) |
| GOmeth | Array (Infinium) | Genome Biology | 2021 | 150 | [Gene set enrichment analysis for genome-wide DNA methylation data](https://doi.org/10.1186/s13059-021-02388-x) |
| eFORGE | Array (Infinium) | Cell Reports | 2016 | 132 | [eFORGE: A Tool for Identifying Cell Type-Specific Signal in Epigenomic Data](https://doi.org/10.1016/j.celrep.2016.10.059) |
| ebGSEA | Array (Infinium) | Bioinformatics | 2019 | 26 | [ebGSEA: an improved Gene Set Enrichment Analysis method for Epigenome-Wide-Association Studies](https://doi.org/10.1093/bioinformatics/btz073) |
| KnowYourCG | Array (Infinium), Short-read (WGBS / RRBS / EM-seq), Single-cell, Spatial | Science Advances | 2025 | 7 | [KnowYourCG: Facilitating base-level sparse methylome interpretation](https://doi.org/10.1126/sciadv.adw3027) |

### EWAS & association statistics

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| bacon | Array (Infinium) | Genome Biology | 2017 | 424 | [Controlling bias and inflation in epigenome- and transcriptome-wide association studies using the empirical null distribution](https://doi.org/10.1186/s13059-016-1131-9) |
| ReFACTor | Array (Infinium) | Nature Methods | 2016 | 243 | [Sparse PCA corrects for cell type heterogeneity in epigenome-wide association studies](https://doi.org/10.1038/nmeth.3809) |
| CpGassoc | Array (Infinium) | Bioinformatics | 2012 | 226 | [CpGassoc: an R function for analysis of DNA methylation microarray data](https://doi.org/10.1093/bioinformatics/bts124) |
| OSCA | Array (Infinium) | Genome Biology | 2019 | 157 | [OSCA: a tool for omic-data-based complex trait analysis](https://doi.org/10.1186/s13059-019-1718-z) |
| SmartSVA | Array (Infinium) | BMC Genomics | 2017 | 78 | [Fast and robust adjustment of cell mixtures in epigenome-wide association studies with SmartSVA](https://doi.org/10.1186/s12864-017-3808-1) |
| GLINT | Array (Infinium) | Bioinformatics | 2017 | 51 | [GLINT: a user-friendly toolset for the analysis of high-throughput DNA-methylation array data](https://doi.org/10.1093/bioinformatics/btx059) |

### Visualization

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| SMART App | Array (Infinium) | Epigenetics & Chromatin | 2019 | 244 | [The SMART App: an interactive web application for comprehensive DNA methylation analysis and visualization](https://doi.org/10.1186/s13072-019-0316-3) |
| MEXPRESS | Array (Infinium) | Nucleic Acids Research | 2019 | 213 | [MEXPRESS update 2019](https://doi.org/10.1093/nar/gkz445) |
| coMET | Array (Infinium) | BMC Bioinformatics | 2015 | 115 | [coMET: visualisation of regional epigenome-wide association scan results and DNA co-methylation patterns](https://doi.org/10.1186/s12859-015-0568-2) |
| Methylartist | Nanopore, PacBio | Bioinformatics | 2022 | 91 | [Methylartist: tools for visualizing modified bases from nanopore sequence data](https://doi.org/10.1093/bioinformatics/btac292) |
| ViewBS | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2018 | 89 | [ViewBS: a powerful toolkit for visualization of high-throughput bisulfite sequencing data](https://doi.org/10.1093/bioinformatics/btx633) |
| Methylation plotter | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Source Code for Biology and Medicine | 2014 | 61 | [Methylation plotter: a web tool for dynamic visualization of DNA methylation data](https://doi.org/10.1186/1751-0473-9-11) |
| NanoMethViz | Nanopore | PLOS Computational Biology | 2021 | 27 | [NanoMethViz: An R/Bioconductor package for visualizing long-read methylation data](https://doi.org/10.1371/journal.pcbi.1009524) |
| modbamtools | Nanopore, PacBio | bioRxiv (preprint) | 2022 | 25 | [Modbamtools: Analysis of single-molecule epigenetic data for long-range profiling, heterogeneity, and clustering](https://doi.org/10.1101/2022.07.07.499188) |
| WashU Epigenome Browser | Short-read (WGBS / RRBS / EM-seq), Array (Infinium), Nanopore | Nucleic Acids Research | 2025 | 14 | [WashU Epigenome Browser update 2025](https://doi.org/10.1093/nar/gkaf387) |

### Databases & atlases

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| Human methylation atlas (UXM) | Short-read (WGBS / RRBS / EM-seq), cfDNA | Nature | 2023 | 723 | [A DNA methylation atlas of normal human cell types](https://doi.org/10.1038/s41586-022-05580-6) |
| MethSurv | Array (Infinium) | Epigenomics | 2018 | 502 | [MethSurv: A Web Tool to Perform Multivariable Survival Analysis Using DNA Methylation Data](https://doi.org/10.2217/epi-2017-0118) |
| GoDMC mQTL atlas | Array (Infinium) | Nature Genetics | 2021 | 501 | [Genomic and phenotypic insights from an atlas of genetic effects on DNA methylation](https://doi.org/10.1038/s41588-021-00923-x) |
| EWAS Atlas | Array (Infinium) | Nucleic Acids Research | 2019 | 286 | [EWAS Atlas: a curated knowledgebase of epigenome-wide association studies](https://doi.org/10.1093/nar/gky1027) |
| EWAS Catalog | Array (Infinium) | Wellcome Open Research | 2022 | 221 | [The EWAS Catalog: a database of epigenome-wide association studies](https://doi.org/10.12688/wellcomeopenres.17598.2) |
| EWAS Data Hub | Array (Infinium) | Nucleic Acids Research | 2020 | 108 | [EWAS Data Hub: a resource of DNA methylation array data and metadata](https://doi.org/10.1093/nar/gkz840) |
| MethMotif | Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2019 | 60 | [MethMotif: an integrative cell specific database of transcription factor binding motifs coupled with DNA methylation profiles](https://doi.org/10.1093/nar/gky1005) |
| MethHC | Array (Infinium) | Nucleic Acids Research | 2021 | 46 | [MethHC 2.0: information repository of DNA methylation and gene expression in human cancer](https://doi.org/10.1093/nar/gkaa1104) |
| MethBank | Short-read (WGBS / RRBS / EM-seq), Array (Infinium) | Nucleic Acids Research | 2023 | 32 | [MethBank 4.0: an updated database of DNA methylation across a variety of species](https://doi.org/10.1093/nar/gkac969) |
| DiseaseMeth | Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2022 | 27 | [DiseaseMeth version 3.0: a major expansion and update of the human disease methylation database](https://doi.org/10.1093/nar/gkab1088) |
| NGSmethDB | Short-read (WGBS / RRBS / EM-seq) | Nucleic Acids Research | 2017 | 19 | [NGSmethDB 2017: enhanced methylomes and differential methylation](https://doi.org/10.1093/nar/gkw996) |

### Pipelines & workflows

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| nf-core/methylseq | Short-read (WGBS / RRBS / EM-seq) | Nature Biotechnology | 2020 | 4,544 | [The nf-core framework for community-curated bioinformatics pipelines](https://doi.org/10.1038/s41587-020-0439-x) |
| snakePipes | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2019 | 190 | [snakePipes: facilitating flexible, scalable and integrative epigenomic analysis](https://doi.org/10.1093/bioinformatics/btz436) |
| methylationArrayAnalysis | Array (Infinium) | F1000Research | 2016 | 121 | [A cross-package Bioconductor workflow for analysing methylation array data](https://doi.org/10.12688/f1000research.8839.2) |
| SAAP-RRBS | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2012 | 58 | [SAAP-RRBS: streamlined analysis and annotation pipeline for reduced representation bisulfite sequencing](https://doi.org/10.1093/bioinformatics/bts337) |
| MeDUSA | Enrichment (MeDIP / MBD) | GigaScience | 2012 | 43 | [Resources for methylome analysis suitable for gene knockout studies of potential epigenome modifiers](https://doi.org/10.1186/2047-217x-1-3) |
| Spatial-DMT pipeline | Spatial | Nature | 2025 | 42 | [Spatial joint profiling of DNA methylome and transcriptome in tissues](https://doi.org/10.1038/s41586-025-09478-x) |
| MethylStar | Short-read (WGBS / RRBS / EM-seq), Single-cell | BMC Genomics | 2020 | 33 | [MethylStar: A fast and robust pre-processing pipeline for bulk or single-cell whole-genome bisulfite sequencing data](https://doi.org/10.1186/s12864-020-06886-3) |
| Bicycle | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2018 | 24 | [Bicycle: a bioinformatics pipeline to analyze bisulfite sequencing data](https://doi.org/10.1093/bioinformatics/btx778) |
| wg-blimp | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2020 | 20 | [wg-blimp: an end-to-end analysis pipeline for whole genome bisulfite sequencing data](https://doi.org/10.1186/s12859-020-3470-5) |
| EpiDiverse EWAS | Short-read (WGBS / RRBS / EM-seq) | Epigenomes | 2021 | 19 | [The EpiDiverse Plant Epigenome-Wide Association Studies (EWAS) Pipeline](https://doi.org/10.3390/epigenomes5020012) |
| msPIPE | Short-read (WGBS / RRBS / EM-seq) | BMC Bioinformatics | 2022 | 16 | [msPIPE: a pipeline for the analysis and visualization of whole-genome bisulfite sequencing data](https://doi.org/10.1186/s12859-022-04925-2) |

### Deep learning & foundation models

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| MethylNet | Array (Infinium) | BMC Bioinformatics | 2020 | 125 | [MethylNet: an automated and modular deep learning approach for DNA methylation analysis](https://doi.org/10.1186/s12859-020-3443-8) |
| CpGPT | Array (Infinium) | bioRxiv (preprint) | 2024 | 37 | [CpGPT: a Foundation Model for DNA Methylation](https://doi.org/10.1101/2024.10.24.619766) |
| MethylGPT | Array (Infinium) | bioRxiv (preprint) | 2024 | 33 | [MethylGPT: a foundation model for the DNA methylome](https://doi.org/10.1101/2024.10.30.621013) |

### 5hmC & other modifications

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| MLML | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2013 | 50 | [MLML: consistent simultaneous estimates of DNA methylation and hydroxymethylation](https://doi.org/10.1093/bioinformatics/btt459) |
| OxyBS | Array (Infinium) | Bioinformatics | 2016 | 36 | [OxyBS: estimation of 5-methylcytosine and 5-hydroxymethylcytosine from tandem-treated oxidative bisulfite and bisulfite DNA](https://doi.org/10.1093/bioinformatics/btw158) |
| oxBS-MLE | Array (Infinium), Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2016 | 33 | [oxBS-MLE: an efficient method to estimate 5-methylcytosine and 5-hydroxymethylcytosine in paired bisulfite and oxidative bisulfite treated DNA](https://doi.org/10.1093/bioinformatics/btw527) |

### Data formats & utilities

| Tool | Data type | Journal | Year | Citations | Paper |
|---|---|---|---|---|---|
| EPIC probe evaluation (Pidsley) | Array (Infinium) | Genome Biology | 2016 | 1,386 | [Critical evaluation of the Illumina MethylationEPIC BeadChip microarray for whole-genome DNA methylation profiling](https://doi.org/10.1186/s13059-016-1066-1) |
| Infinium probe annotation (Zhou) | Array (Infinium) | Nucleic Acids Research | 2016 | 328 | [Comprehensive characterization, annotation and innovative use of Infinium DNA methylation BeadChip probes](https://doi.org/10.1093/nar/gkw967) |
| methrix | Short-read (WGBS / RRBS / EM-seq) | Bioinformatics | 2021 | 17 | [Methrix: an R/Bioconductor package for systematic aggregation and analysis of bisulfite sequencing data](https://doi.org/10.1093/bioinformatics/btaa1048) |
| wgbstools | Short-read (WGBS / RRBS / EM-seq), cfDNA | Life Science Alliance | 2026 | 11 | [wgbstools : a computational suite for DNA methylation sequencing data analysis](https://doi.org/10.26508/lsa.202503514) |
| DMtools | Short-read (WGBS / RRBS / EM-seq) | bioRxiv (preprint) | 2023 | 1 | [DNA Methylation (DM) data format and DMtools for efficient DNA methylation data storage and analysis](https://doi.org/10.1101/2023.11.27.568779) |
| [modkit](https://github.com/nanoporetech/modkit) | Nanopore, PacBio | – | – | – | – |
| [pb-CpG-tools](https://github.com/PacificBiosciences/pb-CpG-tools) | PacBio | – | – | – | – |
| [YAME](https://github.com/zhou-lab/yame) | Short-read (WGBS / RRBS / EM-seq), Single-cell | – | – | – | – |

### Reviews and benchmarks

- **General**: [Analysing and interpreting DNA methylation data](https://doi.org/10.1038/nrg3273). Nature Reviews Genetics, 2012.
- **General**: [Principles and challenges of genome-wide DNA methylation analysis](https://doi.org/10.1038/nrg2732). Nature Reviews Genetics, 2010.
- **General**: [Profiling genome-wide DNA methylation](https://doi.org/10.1186/s13072-016-0075-3). Epigenetics & Chromatin, 2016.
- **Statistics and systems-level analysis**: [Statistical and integrative system-level analysis of DNA methylation data](https://doi.org/10.1038/nrg.2017.86). Nature Reviews Genetics, 2018.
- **Bisulfite sequencing pipelines**: [DNA methylation data by sequencing: experimental approaches and recommendations for tools and pipelines for data analysis](https://doi.org/10.1186/s13148-019-0795-x). Clinical Epigenetics, 2019.
- **Bisulfite sequencing analysis**: [Strategies for analyzing bisulfite sequencing data](https://doi.org/10.1016/j.jbiotec.2017.08.007). Journal of Biotechnology, 2017.
- **Bisulfite aligner benchmark**: [Comprehensive benchmarking of software for mapping whole genome bisulfite data: from read alignment to DNA methylation analysis](https://doi.org/10.1093/bib/bbab021). Briefings in Bioinformatics, 2021.
- **Differential methylation**: [A survey of the approaches for identifying differential methylation using bisulfite sequencing data](https://doi.org/10.1093/bib/bbx013). Briefings in Bioinformatics, 2018.
- **Arrays**: [Analysis pipelines and packages for Infinium HumanMethylation450 BeadChip (450k) data](https://doi.org/10.1016/j.ymeth.2014.08.011). Methods, 2015.
- **Arrays**: [A comprehensive overview of Infinium HumanMethylation450 data processing](https://doi.org/10.1093/bib/bbt054). Briefings in Bioinformatics, 2014.
- **Single-cell**: [Computational Methods for Single-Cell DNA Methylome Analysis](https://doi.org/10.1016/j.gpb.2022.05.007). Genomics, Proteomics & Bioinformatics, 2023.
- **Nanopore**: [DNA methylation-calling tools for Oxford Nanopore sequencing: a survey and human epigenome-wide evaluation](https://doi.org/10.1186/s13059-021-02510-z). Genome Biology, 2021.
- **Cell-type deconvolution**: [Cell-type deconvolution from DNA methylation: a review of recent applications](https://doi.org/10.1093/hmg/ddx275). Human Molecular Genetics, 2017.
- **Deconvolution benchmark**: [Guidelines for cell-type heterogeneity quantification based on a comparative analysis of reference-free DNA methylation deconvolution software](https://doi.org/10.1186/s12859-019-3307-2). BMC Bioinformatics, 2020.
- **Epigenetic clocks**: [DNA methylation-based biomarkers and the epigenetic clock theory of ageing](https://doi.org/10.1038/s41576-018-0004-3). Nature Reviews Genetics, 2018.
<!-- TOOLS:END -->

## Scope and caveats

- Tags reflect what each paper demonstrates. Many tools work on more data types than listed.
- A few widely used tools have no paper (Dorado, modkit, MethylDackel, Trim Galore). They are listed with a link to their repository.
- Some entries are landmark method papers without a named package (the Houseman deconvolution method, for example). They are included because the method is what people cite and reimplement.
