//If static data is used, put the JSON of user data here (or dynamically import/fetch json)
let fullUserData = {
        "types" : {
            "Bookmark" : {
                "pluralLabel" : "Bookmarks"
            },
            "Publication" : {
                "pluralLabel" : "Publications"
            },
            "GoldStandardPublication" : {
                "pluralLabel" : "GoldStandardPublications"
            },
            "GoldStandardBookmark" : {
                "pluralLabel" : "GoldStandardBookmarks"
            },
            "Tag" : {
                "pluralLabel" : "Tags"
            },
            "User" : {
                "pluralLabel" : "Users"
            },
            "Sphere" : {
                "pluralLabel" : "Spheres"
            }
        },

        "properties" : {
            "count" : {
                "valueType" : "number"
            },
            "date" : {
                "valueType" : "date"
            },
            "changeDate" : {
                "valueType" : "date"
            },
            "url" : {
                "valueType" : "url"
            },
            "id" : {
                "valueType" : "url"
            },
            "tags" : {
                "valueType" : "item"
            },
            "user" : {
                "valueType" : "item"
            }
        },

        "items" : [

            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2df900aee859d21fd6ce876984ba18513/aksw",
                "tags" : [
                    "buehmann","group_aksw","lehmann","mole","sbin","westphal"
                ],

                "intraHash" : "df900aee859d21fd6ce876984ba18513",
                "interHash" : "b2fb0f487d074706df218aec18943576",
                "label" : "Spatial concept learning and inference on geospatial polygon data",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:09",
                "changeDate" : "2023-01-11 11:36:09",
                "count" : 1,
                "pub-type": "article",
                "journal": "Knowl. Based Syst.",
                "year": "2022",
                "url": "https://doi.org/10.1016/j.knosys.2022.108233",

                "author": [
                    "Patrick Westphal","Tobias Grubenmann","Diego Collarana","Simon Bin","Lorenz Bühmann","Jens Lehmann"
                ],
                "authors": [

                    {"first" : "Patrick",	"last" : "Westphal"},
                    {"first" : "Tobias",	"last" : "Grubenmann"},
                    {"first" : "Diego",	"last" : "Collarana"},
                    {"first" : "Simon",	"last" : "Bin"},
                    {"first" : "Lorenz",	"last" : "Bühmann"},
                    {"first" : "Jens",	"last" : "Lehmann"}
                ],
                "volume": "241",
                "pubstate" : "published",

                "tppubtype" : "article",

                "doi" : "10.1016/j.knosys.2022.108233",

                "bibtexKey": "WestphalGCBB022"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/29bcff0ceb62424aecac28092f97e4a03/aksw",
                "tags" : [
                    "frey","group_aksw","götz","hofer","kilt"
                ],

                "intraHash" : "9bcff0ceb62424aecac28092f97e4a03",
                "interHash" : "dee17beca89667bc84550ace24e5ca57",
                "label" : "Managing and Compiling Data Dependencies for Semantic Applications using Databus Client",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "inproceedings",
                "booktitle": "15th International Conference on Metadata and Semantics Research","publisher":"Springer",
                "year": "2021",
                "url": "http://svn.aksw.org/papers/2021/databus-client/public.pdf",

                "author": [
                    "Johannes Frey","Fabian Götz","Marvin Hofer"
                ],
                "authors": [

                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Fabian",	"last" : "Götz"},
                    {"first" : "Marvin",	"last" : "Hofer"}
                ],
                "abstract": "Realizing a data-driven application or workflow, that consumes bulk data files from the Web, poses a multitude of challenges ranging from sustainable dependency management supporting automatic updates, to dealing with compression, serialization format, and data model variety.\nIn this work, we present an approach using the novel Databus Client, which is backed by the DBpedia Databus - a data asset release management platform inspired by paradigms and techniques successfully applied in software release management.\nThe approach shifts effort from the publisher to the client while making data consumption and dependency management easier and more unified as a whole.\nThe client leverages 4 layers (download, compression, format, and mapping) that tackle individual challenges and offers a fully automated way for extracting and compiling data assets from the DBpedia Databus, given one command and a flexible dependency configuration using SPARQL or Databus Collections. \nThe current vertical-sliced implementation supports format conversion within as well as mapping between RDF triples, RDF quads, and CSV/TSV files.\nWe developed an evaluation strategy for the format conversion and mapping functionality using so-called round trip tests.",
                "bibtexKey": "frey2021databus"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/21a9250eaed8add07692c55b6605ce772/aksw",
                "tags" : [
                    "frey","group_aksw","hellmann","kilt"
                ],

                "intraHash" : "1a9250eaed8add07692c55b6605ce772",
                "interHash" : "255b6055011e0ad04adb83d5a9a3621c",
                "label" : "Approaches to measure class importance in Knowledge Graphs",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "article",
                "journal": "Plos one","publisher":"Public Library of Science San Francisco, CA USA",
                "year": "2021",
                "url": "https://svn.aksw.org/papers/2021/plos-one-class-importance-kg/public.pdf",

                "author": [
                    "Daniel Fernández-Álvarez","Johannes Frey","Jose Emilio Labra Gayo","Daniel Gayo-Avello","Sebastian Hellmann"
                ],
                "authors": [

                    {"first" : "Daniel",	"last" : "Fernández-Álvarez"},
                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Jose Emilio",	"last" : "Labra Gayo"},
                    {"first" : "Daniel",	"last" : "Gayo-Avello"},
                    {"first" : "Sebastian",	"last" : "Hellmann"}
                ],
                "volume": "16","number": "6","pages": "e0252862","abstract": "The amount, size, complexity, and importance of Knowledge Graphs (KGs) have increased during the last decade. Many different communities have chosen to publish their datasets using Linked Data principles, which favors the integration of this information with many other sources published using the same principles and technologies. Such a scenario requires to develop techniques of Linked Data Summarization. The concept of a class is one of the core elements used to define the ontologies which sustain most of the existing KGs. Moreover, classes are an excellent tool to refer to an abstract idea which groups many individuals (or instances) in the context of a given KG, which is handy to use when producing summaries of its content. Rankings of class importance are a powerful summarization tool that can be used both to obtain a superficial view of the content of a given KG and to prioritize many different actions over the data (data quality checking, visualization, relevance for search engines\u2026). In this paper, we analyze existing techniques to measure class importance and propose a novel approach called ClassRank. We compare the class usage in SPARQL logs of different KGs with the importance ranking produced by the approaches evaluated. Then, we discuss the strengths and weaknesses of the evaluated techniques. Our experimentation suggests that ClassRank outperforms state-of-the-art approaches measuring class importance.",
                "bibtexKey": "fernandez2021approaches"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/27cea81be80ec3db6efee2059264689a6/aksw",
                "tags" : [
                    "frey","group_aksw","hellmann","kilt"
                ],

                "intraHash" : "7cea81be80ec3db6efee2059264689a6",
                "interHash" : "c9cdddb38e4fe2c072208ec8ccf66bc9",
                "label" : "FAIR Linked Data - Towards a Linked Data Backbone for Users and Machines",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "inproceedings",
                "booktitle": "Companion of The Web Conference 2021, Virtual Event / Ljubljana, Slovenia, April 19-23, 2021","publisher":"ACM / IW3C2",
                "year": "2021",
                "url": "https://svn.aksw.org/papers/2021/sci-k_fair-linked-data/public.pdf",

                "author": [
                    "Johannes Frey","Sebastian Hellmann"
                ],
                "authors": [

                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Sebastian",	"last" : "Hellmann"}
                ],

                "editor": [
                    "Jure Leskovec","Marko Grobelnik","Marc Najork","Jie Tang","Leila Zia"
                ],
                "editors": [

                    {"first" : "Jure",	"last" : "Leskovec"},
                    {"first" : "Marko",	"last" : "Grobelnik"},
                    {"first" : "Marc",	"last" : "Najork"},
                    {"first" : "Jie",	"last" : "Tang"},
                    {"first" : "Leila",	"last" : "Zia"}
                ],
                "pages": "431--435","abstract": "Although many FAIR principles could be fulfilled by 5-star LinkedOpen Data, the successful realization of FAIR poses a multitudeof challenges. FAIR publishing and retrieval of Linked Data is stillrather a FAIRytale than reality, for users and machines. In thispaper, we give an overview on four major approaches that tackleindividual challenges of FAIR data and present our vision of a FAIRLinked Data backbone. We propose 1) DBpedia Databus - a flex-ible, heavily automatizable dataset management and publishingplatform based on DataID metadata; that is extended by 2) thenovel Databus Mods architecture which allows for flexible, uni-fied, community-specific metadata extensions and (search) overlaysystems; 3) DBpedia Archivo an archiving solution for unified han-dling and improvement of FAIRness for ontologies on publisher andconsumer side; as well as 4) the DBpedia Global ID managementand lookup services to cluster and discover equivalent entities andproperties.",
                "bibsource" : "dblp computer science bibliography, https://dblp.org",

                "doi" : "10.1145/3442442.3451364",

                "bibtexKey": "freyfair"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2663392ec24277b4302a105b590a02843/aksw",
                "tags" : [
                    "booshehri","emele","fluegel","foerster","frey","glauer","group_aksw","hastings","hellmann","hofmann","hoyer-klick","kilt"
                ],

                "intraHash" : "663392ec24277b4302a105b590a02843",
                "interHash" : "d89a58d55fa32f09a7f0b1bdf4f26c47",
                "label" : "Introducing the Open Energy Ontology: Enhancing data interpretation and interfacing in energy systems analysis",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "article",
                "journal": "Energy and AI","publisher":"Elsevier",
                "year": "2021",
                "url": "https://svn.aksw.org/papers/2021/energy-ai-introducing-oeo/public.pdf",

                "author": [
                    "Meisam Booshehri","Lukas Emele","Simon Flügel","Hannah Förster","Johannes Frey","Ulrich Frey","Martin Glauer","Janna Hastings","Christian Hofmann","Carsten Hoyer-Klick"," others"
                ],
                "authors": [

                    {"first" : "Meisam",	"last" : "Booshehri"},
                    {"first" : "Lukas",	"last" : "Emele"},
                    {"first" : "Simon",	"last" : "Flügel"},
                    {"first" : "Hannah",	"last" : "Förster"},
                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Ulrich",	"last" : "Frey"},
                    {"first" : "Martin",	"last" : "Glauer"},
                    {"first" : "Janna",	"last" : "Hastings"},
                    {"first" : "Christian",	"last" : "Hofmann"},
                    {"first" : "Carsten",	"last" : "Hoyer-Klick"},
                    {"first" : "",	"last" : "others"}
                ],
                "volume": "5","pages": "100074","abstract": "Heterogeneous data, different definitions and incompatible models are a huge problem in many domains, with no exception for the field of energy systems analysis. Hence, it is hard to re-use results, compare model results or couple models at all. Ontologies provide a precisely defined vocabulary to build a common and shared conceptualisation of the energy domain. Here, we present the Open Energy Ontology (OEO) developed for the domain of energy systems analysis. Using the OEO provides several benefits for the community. First, it enables consistent annotation of large amounts of data from various research projects. One example is the Open Energy Platform (OEP). Adding such annotations makes data semantically searchable, exchangeable, re-usable and interoperable. Second, computational model coupling becomes much easier. The advantages of using an ontology such as the OEO are demonstrated with three use cases: data representation, data annotation and interface homogenisation. We also describe how the ontology can be used for linked open data (LOD).",
                "bibtexKey": "introducing-oeo"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/285fc83f156a15d9b3f794ed256326f70/aksw",
                "tags" : [
                    "arndt","quit"
                ],

                "intraHash" : "85fc83f156a15d9b3f794ed256326f70",
                "interHash" : "ab8ce2df5b54b952f0717e21520a1e66",
                "label" : "Distributed Collaboration on Versioned Decentralized RDF Knowledge Bases",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "phdthesis",
                "publisher":"Open-Access-Hochschulverlag Leipzig",
                "year": "2020",
                "url": "https://oa-hochschulverlag.htwk-leipzig.de/fileadmin/portal/m_oa_hochschulverlag/Katalog/Arndt/2020-08-04-natanael-diss-final-pdfx.pdf",

                "author": [
                    "Natanael Arndt"
                ],
                "authors": [

                    {"first" : "Natanael",	"last" : "Arndt"}
                ],
                "abstract": "The aim of this thesis is to support the development of RDF knowledge bases in a distributed collaborative setup. In this thesis a new methodology for distributed collaborative knowledge engineering \u2013 called Quit \u2013 is presented. It follows the premise that it is necessity to express dissent throughout a collaboration process and to provide individual workspaces for each collaborator. The approach is inspired by and based on the Git methodology for collaboration in software engineering. The state of the art analysis shows that no system is consequently transferring the Git methodology to knowledge engineering. The key features of the Quit methodology are independent workspaces for each user and a shared distributed workspace for the collaboration. Throughout the whole collaboration process data provenance plays an important role. To support the methodology the Quit Stack is implemented as a collection of microservices, that allow to integrate the Semantic Web data structure and standard interfaces with the distributed collaborative process. To complement the distributed data authoring, appropriate methods to support the data management process are researched. These management processes are in particular the creation and authoring of data as well as the publication and exploration of data. The application of the methodology is shown in various use cases for the distributed collaboration on organizational data and on research data. Further, the implementation is quantitatively compared to the related work. Finally, it can be concluded that the consequent approach followed by the Quit methodology enables a wide range of distributed Semantic Web knowledge engineering scenarios.",
                "isbn" : "978-3-96627-019-9",

                "doi" : "10.33968/9783966270205-00",

                "bibtexKey": "arndt-2020-dissertation"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2e9efc42e61888ad0c2628ebc2d048ff4/aksw",
                "tags" : [
                    "buehmann","group_aksw","lehmann","mole","sbin","stadler","wenige"
                ],

                "intraHash" : "e9efc42e61888ad0c2628ebc2d048ff4",
                "interHash" : "0c630b7a7e812fec8a5552c9b7198f22",
                "label" : "Schema-agnostic SPARQL-driven faceted search benchmark generation",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 3,
                "pub-type": "article",
                "journal": "Journal of Web Semantics",
                "year": "2020",
                "url": "https://svn.aksw.org/papers/2020/JWS_Faceted_Search_Benchmark/public.pdf",

                "author": [
                    "Claus Stadler","Simon Bin","Lisa Wenige","Lorenz Bühmann","Jens Lehmann"
                ],
                "authors": [

                    {"first" : "Claus",	"last" : "Stadler"},
                    {"first" : "Simon",	"last" : "Bin"},
                    {"first" : "Lisa",	"last" : "Wenige"},
                    {"first" : "Lorenz",	"last" : "Bühmann"},
                    {"first" : "Jens",	"last" : "Lehmann"}
                ],
                "pages": "100614","abstract": "In this work, we present a schema-agnostic faceted browsing benchmark generation framework for RDF data and SPARQL engines. Faceted search is a technique that allows narrowing down sets of information items by applying constraints over their properties, whereas facets correspond to properties of these items. While our work can be used to realise real-world faceted search user interfaces, our focus lies on the construction and benchmarking of faceted search queries over knowledge graphs. The RDF model exhibits several traits that seemingly make it a natural foundation for faceted search: all information items are represented as RDF resources, property values typically already correspond to meaningful semantic classifications, and with SPARQL there is a standard language for uniformly querying instance and schema information. However, although faceted search is ubiquitous today, it is typically not performed on the RDF model directly. Two major sources of concern are the complexity of query generation and the query performance. To overcome the former, our framework comes with an intermediate domain-specific language. Thereby our approach is SPARQL-driven which means that every faceted search information need is intensionally expressed as a single SPARQL query. In regard to the latter, we investigate the possibilities and limits of real-time SPARQL-driven faceted search on contemporary triple stores. We report on our findings by evaluating systems performance and correctness characteristics when executing a benchmark generated using our generation framework. All components, namely the benchmark generator, the benchmark runners and the underlying faceted search framework, are published freely available as open source.",
                "issn" : "1570-8268",

                "doi" : "https://doi.org/10.1016/j.websem.2020.100614",

                "bibtexKey": "stadler2020facete"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2136b32fe330390ea8d417a395d6d394e/aksw",
                "tags" : [
                    "frey","group_aksw","hellmann","hofer","kilt"
                ],

                "intraHash" : "136b32fe330390ea8d417a395d6d394e",
                "interHash" : "4dc8fbb0056b5491541899d9ec7fb872",
                "label" : "Towards a Systematic Approach to Sync Factual Data across Wikipedia, Wikidata and External Data Sources.",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "inproceedings",
                "booktitle": "Proceedings of the Conference on Digital Curation Technologies",
                "year": "2020",
                "url": "https://svn.aksw.org/papers/2020/qurator_gfs/public.pdf",

                "author": [
                    "Sebastian Hellmann","Johannes Frey","Marvin Hofer","Milan Dojchinovski","Krzystof Węcel","Wlodzimierz Lewoniewski"
                ],
                "authors": [

                    {"first" : "Sebastian",	"last" : "Hellmann"},
                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Marvin",	"last" : "Hofer"},
                    {"first" : "Milan",	"last" : "Dojchinovski"},
                    {"first" : "Krzystof",	"last" : "Węcel"},
                    {"first" : "Wlodzimierz",	"last" : "Lewoniewski"}
                ],
                "abstract": "This paper addresses one of the largest and most complexdata curation workflows in existence: Wikipedia and Wikidata with ahigh number of users and curators adding factual information from exter-nal sources via a non-systematic Wiki workflow to Wikipedia\u2019s infoboxesand Wikidata items. We present high-level analyses of the current state,the challenges and limitations in this workflow and supplement it witha quantitative and semantic analysis of the resulting data spaces by de-ploying DBpedia\u2019s integration and extraction capabilities. Based on ananalysis of millions of references from Wikipedia infoboxes in differentlanguages, we can find the most important sources which can be usedto enrich other knowledge bases with information of better quality. Aninitial tool is presented, the GlobalFactSync browser, as a prototype todiscuss further measures to develop a more systematic approach for datacuration in the WikiVerse.",
                "bibtexKey": "hellmann2020gfs"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/27034c6958280a2399a493cdca30c2c28/aksw",
                "tags" : [
                    "frey","group_aksw","hellmann","hofer","kilt"
                ],

                "intraHash" : "7034c6958280a2399a493cdca30c2c28",
                "interHash" : "592b96964e8c91d044c175c1708d2d34",
                "label" : "The New DBpedia Release Cycle: Increasing Agility and Efficiency in Knowledge Extraction Workflows",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 3,
                "pub-type": "article",
                "booktitle": "Semantic Systems. The Power of AI and Knowledge Graphs","series": "Lecture Notes in Computer Science","publisher":"Springer",
                "year": "2020",
                "url": "https://svn.aksw.org/papers/2020/semantics_marvin/public.pdf",

                "author": [
                    "Marvin Hofer","Sebastian Hellmann","Milan Dojchinovski","Johannes Frey"
                ],
                "authors": [

                    {"first" : "Marvin",	"last" : "Hofer"},
                    {"first" : "Sebastian",	"last" : "Hellmann"},
                    {"first" : "Milan",	"last" : "Dojchinovski"},
                    {"first" : "Johannes",	"last" : "Frey"}
                ],
                "volume": "16","abstract": "Since its inception in 2007, DBpedia has been constantly releasing open data in RDF, extracted from various Wikimedia projects using a complex software system called the DBpedia Information Extraction Framework (DIEF). For the past 12 years, the software received a plethora of extensions by the community, which positively affected the size and data quality. Due to the increase in size and complexity, the release process was facing huge delays (from 12 to 17 months cycle), thus impacting the agility of the development. In this paper, we describe the new DBpedia release cycle including our innovative release workflow, which allows development teams (in particular those who publish large, open data) to implement agile, cost-efficient processes and scale up productivity. The DBpedia release workflow has been re-engineered, its new primary focus is on productivity and agility, to address the challenges of size and complexity. At the same time, quality is assured by implementing a comprehensive testing methodology. We run an experimental evaluation and argue that the implemented measures increase agility and allow for cost-effective quality-control and debugging and thus achieve a higher level of maintainability. As a result, DBpedia now publishes regular (i.e. monthly) releases with over 21 billion triples with minimal publishing effort.",
                "bibtexKey": "hoferdbpedia"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/22ab153a6f6ad6ca614db0e0f09416d6f/aksw",
                "tags" : [
                    "frey","group_aksw","hellmann","kilt","mueller"
                ],

                "intraHash" : "2ab153a6f6ad6ca614db0e0f09416d6f",
                "interHash" : "f0c5b332604cbf4411b9e136979afd08",
                "label" : "Evaluation of Metadata Representations in RDF Stores",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 2,
                "pub-type": "article",
                "journal": "Semantic Web",
                "year": "2019",
                "url": "https://svn.aksw.org/papers/2019/SWJ_Eval_MRM/public.pdf",

                "author": [
                    "Johannes Frey","Kay Müller","Sebastian Hellmann","Erhard Rahm","Maria-Esther Vidal"
                ],
                "authors": [

                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Kay",	"last" : "Müller"},
                    {"first" : "Sebastian",	"last" : "Hellmann"},
                    {"first" : "Erhard",	"last" : "Rahm"},
                    {"first" : "Maria-Esther",	"last" : "Vidal"}
                ],
                "volume": "10","number": "2","pages": "205--229",
                "bibsource" : "dblp computer science bibliography, https://dblp.org",

                "doi" : "10.3233/SW-180307",

                "bibtexKey": "DBLP:journals/semweb/FreyMHRV19"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/20c22d92010ca526374854a4c329b33ef/aksw",
                "tags" : [
                    "arndt","frey","goetz","group_aksw","hellmann","kilt","streitmatter"
                ],

                "intraHash" : "0c22d92010ca526374854a4c329b33ef",
                "interHash" : "04be186ffda09a7c4c6a8b9676e808b8",
                "label" : "DBpedia Archivo - A Web-Scale Interface for Ontology Archiving under Consumer-oriented Aspects",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 2,
                "pub-type": "inproceedings",
                "booktitle": "Semantic Systems. The Power of AI and Knowledge Graphs","series": "Lecture Notes in Computer Science","publisher":"Springer",
                "year": "2020",
                "url": "https://svn.aksw.org/papers/2020/semantics_archivo/public.pdf",

                "author": [
                    "Johannes Frey","Denis Streitmatter","Fabian Götz","Sebastian Hellmann","Natanael Arndt"
                ],
                "authors": [

                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Denis",	"last" : "Streitmatter"},
                    {"first" : "Fabian",	"last" : "Götz"},
                    {"first" : "Sebastian",	"last" : "Hellmann"},
                    {"first" : "Natanael",	"last" : "Arndt"}
                ],
                "volume": "16","abstract": "While thousands of ontologies exist on the web, a unified system for handling online ontologies \u2013 in particular with respect to discovery, versioning, access, quality-control, mappings \u2013 has not yet surfaced and users of ontologies struggle with many challenges. In this paper, we present an online ontology interface and augmented archive called DBpedia Archivo, that discovers, crawls, versions and archives ontologies on the DBpedia Databus. Based on this versioned crawl, different features, quality measures and, if possible, fixes are deployed to handle and stabilize the changes in the found ontologies at web-scale. A comparison to existing approaches and ontology repositories is given.",
                "bibtexKey": "freydbpedia"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/29313f2ab82aaaa6ae10dd2fbd668d39d/aksw",
                "tags" : [
                    "Denis","Fabian","G{\\\"o}tz,","Hellmann,","Johannes","Sebastian}","Streitmatter,","and","author={Frey,","frey","group_aksw","hellmann@article{freydbpedia,","kilt","}"
                ],

                "intraHash" : "9313f2ab82aaaa6ae10dd2fbd668d39d",
                "interHash" : "8d57bf3c49ce753af506cb46265588c4",
                "label" : "Inference of Latent Shape Expressions Associated to DBpedia Ontology",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "inproceedings",
                "booktitle": "Proceedings of the ISWC 2018 Posters & Demonstrations, Industry and Blue Sky Ideas Tracks co-located with 17th International Semantic Web Conference (ISWC 2018), Monterey, USA, October 8th - to - 12th, 2018","series": "CEUR Workshop Proceedings","publisher":"CEUR-WS.org",
                "year": "2018",
                "url": "http://ceur-ws.org/Vol-2180/paper-15.pdf",

                "author": [
                    "Daniel Fernández-Álvarez","Herminio Garc\\'ıa-González","Johannes Frey","Sebastian Hellmann","José Emilio Labra Gayo"
                ],
                "authors": [

                    {"first" : "Daniel",	"last" : "Fernández-Álvarez"},
                    {"first" : "Herminio",	"last" : "Garc\\'ıa-González"},
                    {"first" : "Johannes",	"last" : "Frey"},
                    {"first" : "Sebastian",	"last" : "Hellmann"},
                    {"first" : "José Emilio Labra",	"last" : "Gayo"}
                ],

                "editor": [
                    "Marieke van Erp","Medha Atre","Vanessa López","Kavitha Srinivas","Carolina Fortuna"
                ],
                "editors": [

                    {"first" : "Marieke",	"last" : "van Erp"},
                    {"first" : "Medha",	"last" : "Atre"},
                    {"first" : "Vanessa",	"last" : "López"},
                    {"first" : "Kavitha",	"last" : "Srinivas"},
                    {"first" : "Carolina",	"last" : "Fortuna"}
                ],
                "volume": "2180",
                "bibsource" : "dblp computer science bibliography, https://dblp.org",

                "bibtexKey": "DBLP:conf/semweb/Fernandez-Alvarez18"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/23d6f167b1ad6c0f7c01675cce6b0c721/aksw",
                "tags" : [
                    "es","group_aksw","iis","martin"
                ],

                "intraHash" : "3d6f167b1ad6c0f7c01675cce6b0c721",
                "interHash" : "ea8e16548a6cc3e288a8c314de6e791d",
                "label" : "ONTOLOGY-DRIVEN SERVICE INTEGRATION INTO WEB APPLICATIONS: A DECLARATIVE APPROACH",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "inproceedings",
                "booktitle": "IADIS International Conference WWW/Internet 2019",
                "year": "2019",
                "url": "http://www.iadisportal.org/digital-library/ontology-driven-service-integration-into-web-applications-a-declarative-approach",

                "author": [
                    "Andreas Both; Didier Cherix; Michael Martin"
                ],
                "authors": [

                    {"first" : "Andreas Both; Didier Cherix; Michael",	"last" : "Martin"}
                ],

                "editor": [
                    "Pedro Isaías"
                ],
                "editors": [

                    {"first" : "Pedro",	"last" : "Isaías"}
                ],
                "pages": "150 - 154","abstract": "The majority of web applications nowadays are data-driven. However, that does not mean that all data is available while launching the respective application. While considering Web 2.0 applications, data is often fetched on-demand from remote web services, for example, after a location was provided, weather data could be fetched, and local news is loaded. This mashup approach is highly dynamical, i.e., based on the data input of the user, completely different execution paths might be performed. Currently, such workflows are implemented within the application logic requiring high development effort and maintenance of the implemented logic to prevent unintentional behavior. In this paper, we present a novel approach to integrate web services dynamically, to decrease deployment and maintenance costs and to enable the next generation of interlinked data web applications to enables application architects to (re)define the data integration in a descriptive way in an ontology, validate the workflows and define logical requirements. However, our approach is not just a design method but also a method for ad hoc integration of new services. Our approach has a significant impact on the effort for generating and maintaining dynamic applications.",
                "doi" : "10.33965/icwi2019_201913C020",

                "bibtexKey": "Both2019"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2ea9f1455cae6a622cea1140577091508/aksw",
                "tags" : [
                    "AIKE","arndt","es","group_aksw","iis","marx","riechert"
                ],

                "intraHash" : "ea9f1455cae6a622cea1140577091508",
                "interHash" : "c88be0663f143448cdb32086edf5039f",
                "label" : "LEDSPLaY17: Workshop on Linked Enterprise Data Services, Provenance, Linking and QualitY",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 1,
                "pub-type": "inproceedings",
                "booktitle": "INFORMATIK 2017, Lecture Notes in Informatics (LNI)","publisher":"Gesellschaft für Informatik","address":"Bonn, Germany",
                "year": "2017",
                "url": "https://dl.gi.de/bitstream/handle/20.500.12116/3953/B26-0.pdf",

                "author": [
                    "Natanael Arndt","André Langer","Michael Martin","Sebastian Tramp"
                ],
                "authors": [

                    {"first" : "Natanael",	"last" : "Arndt"},
                    {"first" : "André",	"last" : "Langer"},
                    {"first" : "Michael",	"last" : "Martin"},
                    {"first" : "Sebastian",	"last" : "Tramp"}
                ],
                "pages": "1863",
                "location" : "Chemnitz, Germany",

                "doi" : "10.18420/in2017_185",

                "bibtexKey": "arndt-n-2017--ledsplay"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/25c3110d8d115f1db386938f883bc2610/aksw",
                "tags" : [
                    "2019","dice","group_aksw","jalota","ngonga","simba","usbeck"
                ],

                "intraHash" : "5c3110d8d115f1db386938f883bc2610",
                "interHash" : "314676d02b276548e0bb21c72c265262",
                "label" : "An Approach for Ex-Post-Facto Analysis of Knowledge Graph-Driven Chatbots\n               - The DBpedia Chatbot",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 3,
                "pub-type": "inproceedings",
                "booktitle": "Chatbot Research and Design - Third International Workshop, CONVERSATIONS\n               2019, Amsterdam, The Netherlands, November 19-20, 2019, Revised Selected\n               Papers",
                "year": "2019",
                "url": "https://doi.org/10.1007/978-3-030-39540-7\\_2",

                "author": [
                    "Rricha Jalota","Priyansh Trivedi","Gaurav Maheshwari","Axel-Cyrille Ngonga Ngomo","Ricardo Usbeck"
                ],
                "authors": [

                    {"first" : "Rricha",	"last" : "Jalota"},
                    {"first" : "Priyansh",	"last" : "Trivedi"},
                    {"first" : "Gaurav",	"last" : "Maheshwari"},
                    {"first" : "Axel-Cyrille Ngonga",	"last" : "Ngomo"},
                    {"first" : "Ricardo",	"last" : "Usbeck"}
                ],
                "pages": "19--33",
                "doi" : "10.1007/978-3-030-39540-7\\_2",

                "bibtexKey": "DBLP:conf/conversations/JalotaTMNU19"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2414a395a0475e25500e410b55a6b3bdd/aksw",
                "tags" : [
                    "AIKE","arndt","es","group_aksw","iis","marx","riechert"
                ],

                "intraHash" : "414a395a0475e25500e410b55a6b3bdd",
                "interHash" : "c0b23259812f2bde401c2890da6dc3d8",
                "label" : "Doctoral Symposium on Research on Online Databases inHistory (RODBH 2019)",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 2,
                "pub-type": "inproceedings",
                "booktitle": "Proceedings of the Doctoral Symposium on Research on Online Databases in History co-located with 3rd Data for History Workshop","publisher":"CEUR","address":"Leipzig, Germany",
                "year": "2019",
                "url": "https://svn.aksw.org/papers/2019/RODBH_editorial/public.pdf",

                "author": [
                    "Thomas Riechert","Francesco Beretta","George Bruseker","Edgard Marx","Jennifer Blanke","Vincent Alamercery","Tracy Hoffmann","Natanael Arndt"
                ],
                "authors": [

                    {"first" : "Thomas",	"last" : "Riechert"},
                    {"first" : "Francesco",	"last" : "Beretta"},
                    {"first" : "George",	"last" : "Bruseker"},
                    {"first" : "Edgard",	"last" : "Marx"},
                    {"first" : "Jennifer",	"last" : "Blanke"},
                    {"first" : "Vincent",	"last" : "Alamercery"},
                    {"first" : "Tracy",	"last" : "Hoffmann"},
                    {"first" : "Natanael",	"last" : "Arndt"}
                ],
                "volume": "2532","abstract": "This editorial provides an introduction to the field of research of the Doctoral Symposiumon Research on Online Databases in History (RODBH 2019) which was collocated with the 3rdData for History workshop. The workshop series is situated in the field of digital humanities andtargets the interconnection of subjects of historical research, knowledge engineering, and informationscience. The common interlink of this disciplines is the use of research data, data management, andall accompanying activities as well as the organization of collaborative community processes.",
                "bibtexKey": "riechert-t-2019--rodbh"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/203007fefd1968936ce7e88772435f3d7/aksw",
                "tags" : [
                    "2019","dice","group_aksw","ngonga","saleem","simba","usbeck"
                ],

                "intraHash" : "03007fefd1968936ce7e88772435f3d7",
                "interHash" : "34df923f6b84efbed90d2e0eadd2577b",
                "label" : "Proceedings of the QuWeDa 2019: 3rd Workshop on Querying and Benchmarking\n               the Web of Data co-located with 18th International Semantic Web Conference\n               (ISWC 2019), Auckland, New Zealand, October 26-30, 2019",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:08",
                "changeDate" : "2023-01-11 11:36:08",
                "count" : 2,
                "pub-type": "proceedings",
                "series": "CEUR Workshop Proceedings","publisher":"CEUR-WS.org",
                "year": "2019",
                "url": "http://ceur-ws.org/Vol-2496",

                "author": [
                    "Muhammad Saleem","Aidan Hogan","Ricardo Usbeck","Axel-Cyrille Ngonga Ngomo","Ruben Verborgh"
                ],
                "authors": [

                    {"first" : "Muhammad",	"last" : "Saleem"},
                    {"first" : "Aidan",	"last" : "Hogan"},
                    {"first" : "Ricardo",	"last" : "Usbeck"},
                    {"first" : "Axel-Cyrille Ngonga",	"last" : "Ngomo"},
                    {"first" : "Ruben",	"last" : "Verborgh"}
                ],

                "editor": [
                    "Muhammad Saleem","Aidan Hogan","Ricardo Usbeck","Axel-Cyrille Ngonga Ngomo","Ruben Verborgh"
                ],
                "editors": [

                    {"first" : "Muhammad",	"last" : "Saleem"},
                    {"first" : "Aidan",	"last" : "Hogan"},
                    {"first" : "Ricardo",	"last" : "Usbeck"},
                    {"first" : "Axel-Cyrille Ngonga",	"last" : "Ngomo"},
                    {"first" : "Ruben",	"last" : "Verborgh"}
                ],
                "volume": "2496",
                "bibtexKey": "DBLP:conf/semweb/2019quweda"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2cabdee34015aeaa6b88370367acd804b/aksw",
                "tags" : [
                    "2019","dice","group_aksw","limbo","ngonga","simba","solide","usbeck"
                ],

                "intraHash" : "cabdee34015aeaa6b88370367acd804b",
                "interHash" : "0a1b6e6bb32fb1d7d161bd5a37f9800f",
                "label" : "QUANT - Question Answering Benchmark Curator",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:07",
                "changeDate" : "2023-01-11 11:36:07",
                "count" : 4,
                "pub-type": "inproceedings",
                "booktitle": "Semantic Systems. The Power of AI and Knowledge Graphs - 15th International\n               Conference, SEMANTiCS 2019, Karlsruhe, Germany, September 9-12, 2019,\n               Proceedings",
                "year": "2019",
                "url": "https://doi.org/10.1007/978-3-030-33220-4\\_25",

                "author": [
                    "Ria Hari Gusmita","Rricha Jalota","Daniel Vollmers","Jan Reineke","Axel-Cyrille Ngonga Ngomo","Ricardo Usbeck"
                ],
                "authors": [

                    {"first" : "Ria Hari",	"last" : "Gusmita"},
                    {"first" : "Rricha",	"last" : "Jalota"},
                    {"first" : "Daniel",	"last" : "Vollmers"},
                    {"first" : "Jan",	"last" : "Reineke"},
                    {"first" : "Axel-Cyrille Ngonga",	"last" : "Ngomo"},
                    {"first" : "Ricardo",	"last" : "Usbeck"}
                ],
                "pages": "343--358",
                "bibsource" : "dblp computer science bibliography, https://dblp.org",

                "doi" : "10.1007/978-3-030-33220-4\\_25",

                "bibtexKey": "DBLP:conf/i-semantics/GusmitaJVRNU19"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/2b52d97e5c92c952328106836f93974ac/aksw",
                "tags" : [
                    "2019","dice","group_aksw","ngonga","qamel","simba","usbeck"
                ],

                "intraHash" : "b52d97e5c92c952328106836f93974ac",
                "interHash" : "b5b976ce6b394d74284dc10bd5e8e131",
                "label" : "Proceedings of the Posters and Demo Track of the 15th International Conference on Semantic Systems co-located with 15th International Conference on Semantic Systems (SEMANTiCS 2019), Karlsruhe, Germany, September 9th - to - 12th, 2019",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:07",
                "changeDate" : "2023-01-11 11:36:07",
                "count" : 3,
                "pub-type": "proceedings",
                "series": "CEUR Workshop Proceedings","publisher":"CEUR-WS.org",
                "year": "2019",
                "url": "http://ceur-ws.org/Vol-2451",

                "author": [
                    "Mehwish Alam","Ricardo Usbeck","Tassilo Pellegrini","Harald Sack","York Sure-Vetter"
                ],
                "authors": [

                    {"first" : "Mehwish",	"last" : "Alam"},
                    {"first" : "Ricardo",	"last" : "Usbeck"},
                    {"first" : "Tassilo",	"last" : "Pellegrini"},
                    {"first" : "Harald",	"last" : "Sack"},
                    {"first" : "York",	"last" : "Sure-Vetter"}
                ],

                "editor": [
                    "Mehwish Alam","Ricardo Usbeck","Tassilo Pellegrini","Harald Sack","York Sure-Vetter"
                ],
                "editors": [

                    {"first" : "Mehwish",	"last" : "Alam"},
                    {"first" : "Ricardo",	"last" : "Usbeck"},
                    {"first" : "Tassilo",	"last" : "Pellegrini"},
                    {"first" : "Harald",	"last" : "Sack"},
                    {"first" : "York",	"last" : "Sure-Vetter"}
                ],
                "volume": "2451",
                "urn" : "urn:nbn:de:0074-2451-7",

                "bibtexKey": "DBLP:conf/i-semantics/2019pd"

            }
            ,
            {
                "type" : "Publication",
                "id"   : "https://www.bibsonomy.org/bibtex/25b5a042bf97f428015fca41d06f54482/aksw",
                "tags" : [
                    "2019","dice","group_aksw","ngonga","qamel","simba","speck","usbeck"
                ],

                "intraHash" : "5b5a042bf97f428015fca41d06f54482",
                "interHash" : "33f93a8f7427dc9161e1a198ecf73349",
                "label" : "Verarbeiten und Beantworten natürlichsprachlicher Anfragen auf mobilen Endgeräten mit beschränkten Ressourcen: Schlussbericht zum Vorhaben im Rahmen des Eurostarsprojektes E!9725 QAMEL - Fragebeantwortung und mobilen Endgeräten: Projektlaufzeit: 01.11.2015-31.12.2018",
                "user" : "aksw",
                "description" : "",
                "date" : "2023-01-11 11:36:07",
                "changeDate" : "2023-01-11 11:36:07",
                "count" : 1,
                "pub-type": "techreport",

                "year": "2019",
                "url": "https://svn.aksw.org/papers/2019/QAMEL_abschluss/public.pdf",

                "author": [
                    "Axel Ngonga","Ricardo Usbeck","Rene Speck","Daniel Vollmers","Jan Reinecke","Nadine Jochimsen"
                ],
                "authors": [

                    {"first" : "Axel",	"last" : "Ngonga"},
                    {"first" : "Ricardo",	"last" : "Usbeck"},
                    {"first" : "Rene",	"last" : "Speck"},
                    {"first" : "Daniel",	"last" : "Vollmers"},
                    {"first" : "Jan",	"last" : "Reinecke"},
                    {"first" : "Nadine",	"last" : "Jochimsen"}
                ],

                "doi" : "10.2314/KXP:1678060690",

                "bibtexKey": "QAMEL2019"

            }

        ]
    };

//Get reference of div where user infos will be displayed
let userDiv = document.getElementById('user');

//All given years will be saved here
let arrOfYears = [];
//All given Authors will be saved here
let arrOfAuthors = []

console.log(fullUserData);

//Generate array of all given years and all given authors
for (let item in fullUserData.items) {

    //Create List of years were papers have been published
    if (!arrOfYears.includes(fullUserData.items[item].year)) {
        arrOfYears.push(fullUserData.items[item].year)
    }

    //Iterate authors
    for (let author in fullUserData.items[item].author) {

        //Create List of authors who have published
        if (!arrOfAuthors.includes(fullUserData.items[item].author[author])) {
            arrOfAuthors.push(fullUserData.items[item].author[author])
        }
    }
}


//Check our Filter Options
console.log('array of given years: ', arrOfYears)
console.log('array of given authors: ', arrOfAuthors)


//Todo display a button for each year and author
//Todo implement filter logic