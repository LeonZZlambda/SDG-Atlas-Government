export interface SDG {
  id: number;
  color: string;
  name: {
    pt: string;
    en: string;
    es: string;
  };
  shortDescription: {
    pt: string;
    en: string;
    es: string;
  };
  initiatives: {
    pt: string[];
    en: string[];
    es: string[];
  };
  indicators: {
    pt: string[];
    en: string[];
    es: string[];
  };
  risks: {
    pt: string[];
    en: string[];
    es: string[];
  };
}

export const SDG_METADATA: SDG[] = [
  {
    id: 1,
    color: '#E5243B',
    name: { pt: 'Erradicação da Pobreza', en: 'No Poverty', es: 'Fin de la Pobreza' },
    shortDescription: { pt: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.', en: 'End poverty in all its forms everywhere.', es: 'Poner fin a la pobreza en todas sus formas en todo el mundo.' },
    initiatives: {
      pt: ['Criação de microcrédito comunitário', 'Centros de capacitação de renda básica', 'Distribuição de cestas básicas digitais'],
      en: ['Community microfinance initiatives', 'Basic income skill-building centers', 'Digital food basket distribution'],
      es: ['Creación de microcréditos comunitarios', 'Centros de capacitación en ingresos básicos', 'Distribución digital de cestas de alimentos']
    },
    indicators: {
      pt: ['Redução no índice de vulnerabilidade local', 'Famílias atendidas com renda complementar', 'Taxa de inclusão financeira comercial'],
      en: ['Reduction in local vulnerability index', 'Families supported with income assistance', 'Commercial financial inclusion rate'],
      es: ['Reducción en el índice de vulnerabilidad local', 'Familias atendidas con ayuda de ingresos', 'Tasa de inclusión financiera comercial']
    },
    risks: {
      pt: ['Dependência prolongada de auxílios', 'Falta de adesão voluntária', 'Insegurança na distribuição física'],
      en: ['Long-term dependency on assistance', 'Lack of voluntary participation', 'Security issues in physical distribution'],
      es: ['Dependencia prolongada de las ayudas', 'Falta de participación voluntaria', 'Problemas de seguridad en la distribución física']
    }
  },
  {
    id: 2,
    color: '#DDA63A',
    name: { pt: 'Fome Zero e Agricultura Sustentável', en: 'Zero Hunger', es: 'Hambre Cero' },
    shortDescription: { pt: 'Erradicar a fome, alcançar a segurança alimentar e promover a agricultura sustentável.', en: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.', es: 'Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible.' },
    initiatives: {
      pt: ['Hortas urbanas comunitárias agroecológicas', 'Bancos de alimentos contra o desperdício', 'Cooperativas de pequenos produtores agroecológicos'],
      en: ['Agroecological community urban gardens', 'Food banks combating waste', 'Cooperatives of small organic farmers'],
      es: ['Huertos urbanos comunitarios agroecológicos', 'Bancos de alimentos contra el desperdicio', 'Cooperativas de pequeños productores orgánicos']
    },
    indicators: {
      pt: ['Quilos de alimentos salvos do desperdício', 'Quantidade de hortas ativas', 'Nível de segurança alimentar infantil municipal'],
      en: ['Tons of food saved from waste', 'Number of active urban gardens', 'Municipal child food security level'],
      es: ['Toneladas de alimentos rescatados del desperdicio', 'Número de huertos urbanos activos', 'Nivel de seguridad alimentaria infantil municipal']
    },
    risks: {
      pt: ['Variações climáticas extremas', 'Logística de distribuição perecível', 'Pragas agrícolas sem defensivos sintéticos'],
      en: ['Extreme weather disruptions', 'Perishable food supply chain logisitics', 'Agricultural pests without synthetic pesticides'],
      es: ['Disrupciones climáticas extremas', 'Logística de distribución de alimentos perecederos', 'Plagas agrícolas sin pesticidas sintéticos']
    }
  },
  {
    id: 3,
    color: '#4C9F38',
    name: { pt: 'Saúde e Bem-Estar', en: 'Good Health and Well-being', es: 'Salud y Bienestar' },
    shortDescription: { pt: 'Garantir uma vida saudável e promover o bem-estar para todos, em todas as idades.', en: 'Ensure healthy lives and promote well-being for all at all ages.', es: 'Garantizar una vida sana y promover el bienestar para todos en todas las edades.' },
    initiatives: {
      pt: ['Clínicas móveis preventivas de saúde mental', 'Aplicativos de telessaúde comunitária', 'Programas de exercícios e nutrição para idosos'],
      en: ['Mobile preventive mental health clinics', 'Community telehealth applications', 'Senior exercise and nutrition programs'],
      es: ['Clínicas móviles preventivas de salud mental', 'Aplicaciones de telemedicina comunitaria', 'Programas de ejercicio y nutrición para mayores']
    },
    indicators: {
      pt: ['Consultas preventivas realizadas', 'Redução no tempo de espera médico local', 'Aumento na média de atividade física comunitária'],
      en: ['Preventive health checkups completed', 'Reduction in local medical wait times', 'Increase in average community physical activity'],
      es: ['Chequeos médicos preventivos realizados', 'Reducción en el tiempo de espera médico local', 'Aumento en el promedio de actividad física comunitaria']
    },
    risks: {
      pt: ['Falta de médicos e especialistas', 'Instabilidade de internet em áreas isoladas', 'Resistência cultural a tratamentos de saúde mental'],
      en: ['Shortage of doctors and specialists', 'Unstable internet in isolated areas', 'Cultural resistance to mental health treatments'],
      es: ['Falta de médicos y especialistas', 'Internet inestable en áreas aisladas', 'Resistencia cultural a los tratamientos de salud mental']
    }
  },
  {
    id: 4,
    color: '#C5192D',
    name: { pt: 'Educação de Qualidade', en: 'Quality Education', es: 'Educación de Calidad' },
    shortDescription: { pt: 'Garantir a educação de qualidade inclusiva e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos.', en: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.', es: 'Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos.' },
    initiatives: {
      pt: ['Laboratórios digitais de robótica em escolas públicas', 'Educação ambiental prática interativa', 'Cursos técnicos rápidos profissionalizantes'],
      en: ['Robotics digital labs in public schools', 'Practical interactive environmental education', 'Rapid technical and vocational training'],
      es: ['Laboratorios digitales de robótica en escuelas públicas', 'Educación ambiental práctica interactiva', 'Cursos técnicos rápidos y capacitación vocacional']
    },
    indicators: {
      pt: ['Estudantes formados em tecnologia', 'Redução nas taxas de evasão escolar', 'Pontuação média em avaliações padronizadas'],
      en: ['Students trained in technology skills', 'Reduction in school dropout rates', 'Average scores in standardized assessments'],
      es: ['Estudiantes capacitados en tecnología', 'Reducción de la tasa de deserción escolar', 'Puntuaciones promedio en evaluaciones estandarizadas']
    },
    risks: {
      pt: ['Obsolescência de equipamentos digitais', 'Falta de treinamento de docentes', 'Falta de interesse ou evasão por necessidade financeira'],
      en: ['Digital hardware obsolescence', 'Lack of teacher professional training', 'Dropouts due to financial pressure on families'],
      es: ['Obsolescencia de equipos digitales', 'Falta de capacitación del personal docente', 'Deserción escolar debido a presión financiera familiar']
    }
  },
  {
    id: 5,
    color: '#FF3A21',
    name: { pt: 'Igualdade de Gênero', en: 'Gender Equality', es: 'Igualdad de Género' },
    shortDescription: { pt: 'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.', en: 'Achieve gender equality and empower all women and girls.', es: 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas.' },
    initiatives: {
      pt: ['Mentorias profissionais de mulheres para liderança', 'Apoio a mulheres empreendedoras locais', 'Campanhas de conscientização contra violência de gênero'],
      en: ['Mentorships programs for women in leadership', 'Support networks for female entrepreneurs', 'Gender-based violence awareness campaigns'],
      es: ['Programas de mentoría para mujeres líderes', 'Redes de apoyo para mujeres emprendedoras', 'Campañas de concienciación sobre la violencia de género']
    },
    indicators: {
      pt: ['Mulheres capacitadas em liderança', 'Novas empresas de liderança feminina criadas', 'Redução nos relatos de assédio local'],
      en: ['Women certified in leadership skills', 'New female-led microbusinesses created', 'Reduction in local harassment reports'],
      es: ['Mujeres capacitadas en habilidades de liderazgo', 'Nuevos micronegocios liderados por mujeres', 'Reducción en los reportes de acoso local']
    },
    risks: {
      pt: ['Retaliação ou preconceito estrutural', 'Falta de canais de denúncia seguros', 'Pouca adesão masculina nas discussões de gênero'],
      en: ['Backlash or structural prejudice', 'Lack of secure reporting channels', 'Low male engagement in gender dialogs'],
      es: ['Reacción o prejuicios estructurales', 'Falta de canales de denuncia seguros', 'Baja participación masculina en los diálogos de género']
    }
  },
  {
    id: 6,
    color: '#26BDE2',
    name: { pt: 'Água Potável e Saneamento', en: 'Clean Water and Sanitation', es: 'Agua Limpia y Saneamiento' },
    shortDescription: { pt: 'Garantir a disponibilidade e a gestão sustentável da água e saneamento para todos.', en: 'Ensure availability and sustainable management of water and sanitation for all.', es: 'Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.' },
    initiatives: {
      pt: ['Filtros ecológicos de água em comunidades isoladas', 'Reciclagem de águas cinzas residenciais', 'Sistemas comunitários de captação de chuva'],
      en: ['Eco-friendly water filters in rural areas', 'Residential greywater recycling systems', 'Rainwater harvesting community networks'],
      es: ['Filtros ecológicos en comunidades rurales', 'Sistemas residenciales de reciclaje de aguas grises', 'Redes comunitarias de captación de agua de lluvia']
    },
    indicators: {
      pt: ['Litros de água potável fornecidos por dia', 'Número de famílias conectadas ao tratamento', 'Redução em doenças de veiculação hídrica'],
      en: ['Liters of clean water provided daily', 'Families connected to sanitation systems', 'Reduction in waterborne disease cases'],
      es: ['Litros de agua limpia suministrados diariamente', 'Familias conectadas a sistemas de saneamiento', 'Reducción en casos de enfermedades transmitidas por el agua']
    },
    risks: {
      pt: ['Secas prolongadas afetando reservas', 'Falta de manutenção técnica dos filtros', 'Contaminação cruzada por esgoto aberto'],
      en: ['Prolonged droughts affecting reserves', 'Lack of filter maintenance support', 'Cross-contamination by open sewage'],
      es: ['Sequías prolongadas que afectan reservas', 'Falta de mantenimiento técnico de los filtros', 'Contaminación cruzada por alcantarillado abierto']
    }
  },
  {
    id: 7,
    color: '#FCC30B',
    name: { pt: 'Energia Limpa e Acessível', en: 'Affordable and Clean Energy', es: 'Energía Asequible' },
    shortDescription: { pt: 'Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos.', en: 'Ensure access to affordable, reliable, sustainable and modern energy for all.', es: 'Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.' },
    initiatives: {
      pt: ['Instalação de painéis solares comunitários', 'Postos públicos de carregamento de veículos leves', 'Mini-geradores eólicos residenciais rurais'],
      en: ['Installation of community solar microgrids', 'Public charging points for light electric vehicles', 'Rural residential mini wind generators'],
      es: ['Instalación de microredes solares comunitarias', 'Puntos públicos de carga de vehículos eléctricos ligeros', 'Mini generadores eólicos residenciales rurales']
    },
    indicators: {
      pt: ['kWh gerados de fontes renováveis', 'Redução nas emissões estimadas de CO2', 'Famílias beneficiadas com tarifa social energética'],
      en: ['kWh generated from renewable sources', 'Reduction in estimated CO2 emissions', 'Families supported with low-cost clean energy'],
      es: ['kWh generados a partir de fuentes renovables', 'Reducción en las emisiones estimadas de CO2', 'Familias beneficiadas con tarifa social de energía']
    },
    risks: {
      pt: ['Alto investimento inicial de aquisição', 'Dependência climática direta (sol/vento)', 'Dificuldade de integração na rede convencional'],
      en: ['High upfront investment costs', 'Direct climate dependence (sun/wind)', 'Conventional grid connection complexities'],
      es: ['Altos costes de inversión inicial', 'Dependencia climática directa (sol/viento)', 'Complejidad en la conexión a la red convencional']
    }
  },
  {
    id: 8,
    color: '#A21942',
    name: { pt: 'Trabalho Decente e Crescimento Econômico', en: 'Decent Work and Economic Growth', es: 'Trabajo Decente y Crecimiento' },
    shortDescription: { pt: 'Promover o crescimento econômico sustentável, emprego pleno e produtivo e trabalho decente para todos.', en: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.', es: 'Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.' },
    initiatives: {
      pt: ['Incubadoras de negócios verdes e de impacto', 'Criação de polos de trabalho remoto comunitário', 'Capacitação financeira para microempreendedores'],
      en: ['Incubators for green & impact businesses', 'Establishment of local coworking spaces', 'Financial literacy for micro-business owners'],
      es: ['Incubadoras para negocios verdes y de impacto', 'Establecimiento de espacios de cotrabajo locales', 'Educación financiera para microemprendedores']
    },
    indicators: {
      pt: ['Empregos diretos sustentáveis gerados', 'Aumento de faturamento médio das empresas inscritas', 'Microcréditos gerados e adimplidos'],
      en: ['Sustainable direct jobs created', 'Average revenue growth in enrolled firms', 'Microloans disbursed and repaid successfully'],
      es: ['Empleos directos sostenibles creados', 'Crecimiento de ingresos en empresas participantes', 'Microcréditos desembolsados y pagados con éxito']
    },
    risks: {
      pt: ['Recessões econômicas externas', 'Alta taxa de mortalidade de microempresas', 'Falta de conexão com grandes cadeias produtivas'],
      en: ['External economic recessions', 'High mortality rate of new microbusinesses', 'Poor connection with major corporate supply chains'],
      es: ['Recesiones económicas externas', 'Alta tasa de mortalidad de nuevos micronegocios', 'Dificultad de conexión con grandes cadenas de valor']
    }
  },
  {
    id: 9,
    color: '#FD6925',
    name: { pt: 'Indústria, Inovação e Infraestrutura', en: 'Industry, Innovation and Infrastructure', es: 'Industria, Innovación e Infraestructura' },
    shortDescription: { pt: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e fomentar a inovação.', en: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.', es: 'Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación.' },
    initiatives: {
      pt: ['Infraestrutura verde com drenagem urbana sustentável', 'Instalação de fibra óptica comunitária aberta', 'Espaços makers para prototipagem sustentável'],
      en: ['Green infrastructure with sustainable drainage', 'Open community fiber optic deployment', 'Maker spaces for sustainable hardware prototyping'],
      es: ['Infraestructura verde con drenaje urbano sostenible', 'Despliegue de fibra óptica comunitaria abierta', 'Espacios makers para la creación de hardware sostenible']
    },
    indicators: {
      pt: ['Metros de ruas adaptadas para drenagem verde', 'Famílias conectadas à banda larga rápida', 'Patentes ou protótipos ecológicos desenvolvidos'],
      en: ['Meters of streets adapted to green drainage', 'Families connected to high-speed broadband', 'Eco-patents or prototypes developed'],
      es: ['Metros de calles con drenaje sostenible', 'Familias conectadas a banda ancha de alta velocidad', 'Ecopatentes o prototipos desarrollados']
    },
    risks: {
      pt: ['Custos elevados de obras públicas', 'Demora em aprovações regulatórias governamentais', 'Falta de componentes eletrônicos importados'],
      en: ['High construction and deployment budgets', 'Regulatory approval and government delays', 'Supply chain shortages in electronic components'],
      es: ['Altos presupuestos de construcción y obras', 'Retrasos en las aprobaciones regulatorias gubernamentales', 'Escasez de componentes electrónicos importados']
    }
  },
  {
    id: 10,
    color: '#DD1367',
    name: { pt: 'Redução das Desigualdades', en: 'Reduced Inequalities', es: 'Reducción de las Desigualdades' },
    shortDescription: { pt: 'Reduzir a desigualdade dentro dos países e entre eles.', en: 'Reduce inequality within and among countries.', es: 'Reducir la desigualdad en y entre los países.' },
    initiatives: {
      pt: ['Programas de inclusão cultural e digital para imigrantes', 'Acessibilidade universal em pontos turísticos e públicos', 'Bolsas de estudo integrais para grupos marginalizados'],
      en: ['Cultural & digital integration programs for immigrants', 'Universal physical accessibility in public places', 'Full tuition scholarships for marginalized groups'],
      es: ['Programas de integración cultural y digital para inmigrantes', 'Accesibilidad física universal en espacios públicos', 'Becas de matrícula completas para grupos vulnerables']
    },
    indicators: {
      pt: ['Pessoas marginalizadas integradas ao mercado laboral', 'Pontos urbanos adaptados para acessibilidade total', 'Taxa de permanência em cursos superiores'],
      en: ['Marginalized individuals integrated into job market', 'Public urban points adapted for full accessibility', 'University persistence rates of scholarship holders'],
      es: ['Personas vulnerables integradas en el mercado laboral', 'Puntos urbanos públicos adaptados con accesibilidad completa', 'Tasa de permanencia universitaria de los becados']
    },
    risks: {
      pt: ['Políticas públicas excludentes estruturais', 'Falta de transporte público integrador', 'Preconceito e segregação das populações atendidas'],
      en: ['Exclusionary state/local policies', 'Lack of connecting public transit systems', 'Systemic prejudice and segregation of target groups'],
      es: ['Políticas públicas excluyentes estructurales', 'Falta de sistemas de transporte público integrados', 'Prejuicios sistémicos y segregación de los beneficiarios']
    }
  },
  {
    id: 11,
    color: '#FD9D24',
    name: { pt: 'Cidades e Comunidades Sustentáveis', en: 'Sustainable Cities and Communities', es: 'Ciudades y Comunidades Sostenibles' },
    shortDescription: { pt: 'Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.', en: 'Make cities and human settlements inclusive, safe, resilient and sustainable.', es: 'Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.' },
    initiatives: {
      pt: ['Revitalização de praças públicas com compostagem', 'Corredores de mobilidade ativa e ciclovias integradas', 'Retrofit ecológico em moradias populares'],
      en: ['Urban plaza revitalization with composting', 'Active mobility corridors and bike lane networks', 'Ecological retrofit of low-income housing'],
      es: ['Revitalización de plazas con compostaje urbano', 'Corredores de movilidad activa y ciclovías integradas', 'Retrofit ecológico de viviendas de bajo coste']
    },
    indicators: {
      pt: ['Metros quadrados de áreas verdes criadas', 'Percentual de viagens de bicicleta/a pé monitorado', 'Emissões de material particulado no ar local'],
      en: ['Square meters of green areas created', 'Percentage of active transit trips measured', 'Local fine particulate matter (PM2.5) levels'],
      es: ['Metros cuadrados de áreas verdes creadas', 'Porcentaje de viajes en transporte activo medidos', 'Niveles de material particulado fino (PM2.5) local']
    },
    risks: {
      pt: ['Especulação imobiliária e gentrificação', 'Vandalismo em áreas comuns abertas', 'Falta de priorização do transporte público'],
      en: ['Real estate speculation and gentrification', 'Vandalism in open public spaces', 'Lack of prioritizing public over private transit'],
      es: ['Especulación inmobiliaria y gentrificación', 'Vandalismo en espacios públicos abiertos', 'Falta de prioridad del transporte público sobre el privado']
    }
  },
  {
    id: 12,
    color: '#C1902D',
    name: { pt: 'Consumo e Produção Responsáveis', en: 'Responsible Consumption and Production', es: 'Producción y Consumo Responsables' },
    shortDescription: { pt: 'Garantir padrões de consumo e de produção sustentáveis.', en: 'Ensure sustainable consumption and production patterns.', es: 'Garantizar modalidades de consumo y de producción sostenibles.' },
    initiatives: {
      pt: ['Redes locais de reparabilidade e compartilhamento', 'Certificação de lixo zero para comércios de bairro', 'Programas de economia circular em indústrias'],
      en: ['Local repair and resource sharing networks', 'Zero-waste certification for local businesses', 'Industrial circular economy integration schemes'],
      es: ['Redes locales de reparación y recursos compartidos', 'Certificación de residuo cero para negocios locales', 'Integración de economía circular en industrias']
    },
    indicators: {
      pt: ['Quilos de resíduos destinados à compostagem/reciclagem', 'Negócios certificados lixo zero', 'Economia financeira por reaproveitamento de insumos'],
      en: ['kg of waste sent to composting/recycling', 'Number of certified zero-waste stores', 'Financial savings from material reuse'],
      es: ['kg de residuos enviados a compostaje/reciclaje', 'Número de tiendas certificadas residuo cero', 'Ahorro financiero por reutilización de insumos']
    },
    risks: {
      pt: ['Resistência cultural à reutilização', 'Falta de postos de coleta seletiva estatais', 'Produtos descartáveis excessivamente baratos'],
      en: ['Cultural resistance to product reuse', 'Inadequate municipal sorting/recycling centers', 'Excessively cheap disposable materials'],
      es: ['Resistencia cultural a la reutilización de productos', 'Insuficiencia de centros de separación municipales', 'Materiales desechables excesivamente baratos']
    }
  },
  {
    id: 13,
    color: '#3F7E44',
    name: { pt: 'Ação Contra a Mudança Global do Clima', en: 'Climate Action', es: 'Acción por el Clima' },
    shortDescription: { pt: 'Adotar medidas urgentes para combater as alterações climáticas e os seus impactos.', en: 'Take urgent action to combat climate change and its impacts.', es: 'Adoptar medidas urgentes para combatir el cambio climático y sus efectos.' },
    initiatives: {
      pt: ['Florestas urbanas e plantio massivo de árvores nativas', 'Planos de contingência de enchentes em encostas', 'Educação climática escolar e mapeamento de riscos'],
      en: ['Urban micro-forests and native tree planting', 'Slope flood contingency planning systems', 'Climate education in schools and risk mapping'],
      es: ['Microbosques urbanos y plantación de árboles nativos', 'Sistemas de planes de contingencia para inundaciones', 'Educación climática escolar y mapeo de riesgos']
    },
    indicators: {
      pt: ['Quantidade de árvores nativas plantadas e ativas', 'Pessoas treinadas em planos de evacuação climática', 'Ton CO2 sequestradas estimadas anualmente'],
      en: ['Number of native trees planted and surviving', 'People trained in emergency climate plans', 'Tons of CO2 sequestered annually (estimated)'],
      es: ['Número de árboles nativos plantados y activos', 'Personas capacitadas en planes de emergencia climática', 'Toneladas de CO2 secuestradas anualmente (estimado)']
    },
    risks: {
      pt: ['Falta de manutenção no plantio inicial', 'Baixo engajamento nas simulações preventivas', 'Fenômenos climáticos extremos durante a instalação'],
      en: ['High mortality of saplings due to neglect', 'Low community attendance in drills', 'Extreme weather destroying project assets early'],
      es: ['Falta de mantenimiento en las plántulas iniciales', 'Baja participación en los simulacros preventivos', 'Fenómenos climáticos extremos que dañan el proyecto']
    }
  },
  {
    id: 14,
    color: '#0A97D9',
    name: { pt: 'Vida na Água', en: 'Life Below Water', es: 'Vida Submarina' },
    shortDescription: { pt: 'Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos.', en: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.', es: 'Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos para el desarrollo sostenible.' },
    initiatives: {
      pt: ['Mutirões de limpeza de praias e rios com triagem', 'Barreiras flutuantes contra microplásticos em estuários', 'Zonas locais de preservação e reprodução pesqueira'],
      en: ['Beach and river cleanup drives with waste sorting', 'Floating barrier networks for microplastics in estuaries', 'Local marine protected areas and fish sanctuaries'],
      es: ['Campañas de limpieza de playas y ríos con separación', 'Barreras flotantes contra microplásticos en estuarios', 'Zonas de reserva marina local y santuarios de peces']
    },
    indicators: {
      pt: ['Toneladas de plásticos recolhidas de corpos d\'água', 'Metros de faixas ribeirinhas monitoradas', 'Aumento das populações de espécies marinhas indicadoras'],
      en: ['Tons of plastic retrieved from water bodies', 'Meters of shoreline monitored', 'Increase in indicator marine species populations'],
      es: ['Toneladas de plástico retiradas de cuerpos de agua', 'Metros de ribera fluvial monitoreada', 'Incremento en poblaciones de especies marinas indicadoras']
    },
    risks: {
      pt: ['Contaminação industrial persistente fora do escopo', 'Falta de fiscalização ambiental oficial', 'Impacto do descarte de lixo a montante do rio'],
      en: ['Upstream heavy industrial pollution beyond project scope', 'Inadequate environmental enforcement patrol', 'Continuous upstream household garbage dumping'],
      es: ['Contaminación industrial río arriba fuera del alcance', 'Patrullaje e inspección ambiental oficial insuficiente', 'Vertido continuo de basura doméstica río arriba']
    }
  },
  {
    id: 15,
    color: '#56C02B',
    name: { pt: 'Vida Terrestre', en: 'Life on Land', es: 'Vida de Ecosistemas Terrestres' },
    shortDescription: { pt: 'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres.', en: 'Protect, restore and promote sustainable use of terrestrial ecosystems.', es: 'Proteger, restablecer y promover el uso sostenible de los ecosistemas terrestres.' },
    initiatives: {
      pt: ['Criação de corredores ecológicos urbanos', 'Reflorestamento de encostas e cabeceiras de rios', 'Educação para preservação de polinizadores (abelhas)'],
      en: ['Creation of urban ecological corridors', 'Reforestation of degraded hillsides and riverheads', 'Education and habitat creation for native pollinators'],
      es: ['Creación de corredores ecológicos urbanos', 'Reforestación de laderas degradadas y nacientes', 'Educación y creación de hábitats para polinizadores']
    },
    indicators: {
      pt: ['Hectares de solo degradado recuperados', 'Abundância de polinizadores e insetos locais', 'Espécies de flora nativa catalogadas e reinseridas'],
      en: ['Hectares of degraded land restored', 'Local pollinator and insect population counts', 'Native plant species cataloged and re-established'],
      es: ['Hectáreas de suelo degradado recuperadas', 'Conteos de polinizadores e insectos locales', 'Especies de plantas nativas catalogadas y reintroducidas']
    },
    risks: {
      pt: ['Incêndios florestais acidentais ou criminosos', 'Uso contínuo de defensivos nas propriedades vizinhas', 'Espécies invasoras sufocando o plantio nativo'],
      en: ['Forest fires destroying assets', 'Neighboring pesticide usage drifting into habitat', 'Invasive flora species overtaking native plantings'],
      es: ['Incendios forestales accidentales o provocados', 'Pesticidas vecinos que contaminan el hábitat', 'Flora invasora que asfixia los cultivos nativos']
    }
  },
  {
    id: 16,
    color: '#00689D',
    name: { pt: 'Paz, Justiça e Instituições Eficazes', en: 'Peace, Justice and Strong Institutions', es: 'Paz, Justicia e Instituciones Sólidas' },
    shortDescription: { pt: 'Promover sociedades pacíficas e inclusivas, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas.', en: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions.', es: 'Promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y construir instituciones eficaces, responsables e inclusivas.' },
    initiatives: {
      pt: ['Plataformas municipais de orçamento participativo digital', 'Núcleos de mediação de conflitos comunitários', 'Laboratórios de transparência e dados abertos públicos'],
      en: ['Digital municipal participatory budgeting tools', 'Community conflict mediation centers', 'Open government data transparency portals'],
      es: ['Herramientas digitales de presupuesto municipal participativo', 'Centros comunitarios de mediación de conflictos', 'Portales de datos abiertos de transparencia gubernamental']
    },
    indicators: {
      pt: ['Cidadãos ativos na plataforma participativa', 'Conflitos comunitários resolvidos por mediação', 'Métricas de integridade e acesso à informação atualizadas'],
      en: ['Active citizens in municipal budgeting tools', 'Neighborhood disputes resolved by mediation', 'Data sets published on transparency portal'],
      es: ['Ciudadanos activos en la plataforma participativa', 'Disputas vecinales resueltas por mediación', 'Conjuntos de datos publicados en el portal de transparencia']
    },
    risks: {
      pt: ['Perda de apoio político municipal', 'Falta de infraestrutura digital por parte da população', 'Polarização ideológica nas discussões de prioridades'],
      en: ['Loss of municipal/political administration support', 'Digital divide limiting citizen access', 'Political polarization disrupting discussions'],
      es: ['Pérdida de apoyo de la administración política municipal', 'Brecha digital que limita el acceso ciudadano', 'Polarización política que perturba las discusiones']
    }
  },
  {
    id: 17,
    color: '#19486A',
    name: { pt: 'Parcerias e Meios de Implementação', en: 'Partnerships for the Goals', es: 'Alianzas para Lograr los Objetivos' },
    shortDescription: { pt: 'Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.', en: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.', es: 'Fortalecer los medios de ejecución y revitalizar la Alianza Mundial para el Desarrollo Sostenible.' },
    initiatives: {
      pt: ['Fórum local multissetorial (Empresas, ONG, Governo)', 'Pactos locais de sustentabilidade urbana compartilhada', 'Redes de financiamento coletivo para impacto sustentável'],
      en: ['Multisector local collaboration roundtables', 'Citywide private-public sustainable pacts', 'Crowdfunding networks dedicated to impact projects'],
      es: ['Mesas de colaboración local multisectorial', 'Pactos público-privados de sostenibilidad urbana', 'Redes de financiación colectiva para proyectos de impacto']
    },
    indicators: {
      pt: ['Parceiros comerciais e governamentais ativos', 'Fundos captados externamente para os projetos', 'Planos de ação intersetoriais homologados'],
      en: ['Active business and public partners enrolled', 'Total funds raised via collaborative sources', 'Cross-sector joint action plans approved'],
      es: ['Socios comerciales y públicos activos registrados', 'Fondos totales recaudados de fuentes colaborativas', 'Planes de acción conjunta intersectorial aprobados']
    },
    risks: {
      pt: ['Divergência de objetivos entre os parceiros', 'Falta de engajamento a longo prazo', 'Descontinuidade de incentivos fiscais estaduais'],
      en: ['Diverging interests among stakeholders', 'Lack of long-term partnership commitment', 'Discontinuation of local fiscal incentives'],
      es: ['Intereses divergentes entre las partes interesadas', 'Falta de compromiso de alianza a largo plazo', 'Descontinuación de los incentivos fiscales locales']
    }
  }
];

// Synergy & Conflict matrix values (-1 to +1)
// We define standard coefficients for key inter-dependencies
export const INTER_SDG_COEFFICIENTS: Record<string, number> = {
  // Strong synergies
  '1-2': 0.85, '1-3': 0.75, '1-4': 0.70, '1-8': 0.80, '1-10': 0.85, '1-11': 0.60,
  '2-3': 0.80, '2-6': 0.65, '2-12': 0.65, '2-13': 0.70, '2-15': 0.50,
  '3-4': 0.65, '3-6': 0.70, '3-10': 0.60, '3-11': 0.60, '3-15': 0.45,
  '4-5': 0.75, '4-8': 0.70, '4-10': 0.80, '4-16': 0.55,
  '5-8': 0.65, '5-10': 0.75, '5-16': 0.60,
  '6-7': 0.55, '6-11': 0.65, '6-13': 0.60, '6-14': 0.70, '6-15': 0.55,
  '7-9': 0.75, '7-11': 0.70, '7-12': 0.55, '7-13': 0.85,
  '8-9': 0.70, '8-10': 0.75, '8-12': 0.45,
  '9-11': 0.65, '9-12': 0.50,
  '10-16': 0.80, '10-17': 0.65,
  '11-12': 0.70, '11-13': 0.75, '11-15': 0.55,
  '12-13': 0.80, '12-14': 0.75, '12-15': 0.75,
  '13-14': 0.85, '13-15': 0.85,
  '14-15': 0.70,
  '16-17': 0.75,
  // Trade-offs (negative coefficients)
  '8-13': -0.22,  // crescimento econômico vs emissões de carbono
  '8-15': -0.18,  // expansão econômica vs preservação de ecossistemas terrestres
  '9-13': -0.32,  // industrialização vs ação climática
  '9-14': -0.20,  // infraestrutura industrial vs vida marinha
  '9-15': -0.15,  // expansão de infraestrutura vs vida terrestre
  '1-13': -0.12,  // erradicação da pobreza via consumo vs clima
  '2-7':  -0.10,  // agricultura intensiva vs energia (uso de combustíveis em máquinas)
  '7-14': -0.14,  // energia (hidrelétricas) vs vida aquática
  '11-14':-0.12,  // urbanização vs ecossistemas costeiros
  '12-8': -0.18,  // consumo responsável pode restringir crescimento econômico
};

// Trade-off descriptions per pair for contextual messages
const TRADEOFF_DESCRIPTIONS: Record<string, { pt: string; en: string; es: string }> = {
  '8-13':  { pt: 'Crescimento econômico acelerado tende a aumentar emissões de carbono. Recomendado: metas de carbono neutro e tecnologias limpas de produção.', en: 'Accelerated economic growth tends to increase carbon emissions. Recommended: carbon-neutral targets and clean production technologies.', es: 'El crecimiento económico acelerado tiende a aumentar las emisiones de carbono. Recomendado: metas de carbono neutro y tecnologías limpias.' },
  '9-13':  { pt: 'Expansão industrial e de infraestrutura pressiona ecossistemas e o clima. Recomendado: avaliação de impacto ambiental obrigatória e compensação de carbono.', en: 'Industrial and infrastructure expansion pressures ecosystems and climate. Recommended: mandatory environmental impact assessment and carbon offsets.', es: 'La expansión industrial e infraestructural presiona los ecosistemas y el clima. Recomendado: evaluación de impacto ambiental obligatoria y compensación de carbono.' },
  '9-14':  { pt: 'Construção de infraestrutura costeira ou hidráulica ameaça ecossistemas aquáticos. Recomendado: zonas de exclusão marinha e avaliação hidrológica prévia.', en: 'Coastal or hydraulic infrastructure threatens aquatic ecosystems. Recommended: marine exclusion zones and prior hydrological assessment.', es: 'La infraestructura costera o hidráulica amenaza los ecosistemas acuáticos. Recomendado: zonas de exclusión marina y evaluación hidrológica previa.' },
  '9-15':  { pt: 'Expansão de infraestrutura pode fragmentar habitats terrestres. Recomendado: corredores ecológicos e planos de compensação ambiental.', en: 'Infrastructure expansion can fragment terrestrial habitats. Recommended: ecological corridors and environmental compensation plans.', es: 'La expansión de infraestructura puede fragmentar hábitats terrestres. Recomendado: corredores ecológicos y planes de compensación ambiental.' },
  '8-15':  { pt: 'Crescimento econômico via exploração de recursos naturais pressiona ecossistemas terrestres. Recomendado: critérios ESG rigorosos e economia circular.', en: 'Economic growth via natural resource exploitation pressures terrestrial ecosystems. Recommended: strict ESG criteria and circular economy.', es: 'El crecimiento económico vía explotación de recursos presiona ecosistemas terrestres. Recomendado: criterios ESG estrictos y economía circular.' },
  '1-13':  { pt: 'Programas de transferência de renda podem estimular consumo com pegada de carbono elevada. Recomendado: vincular benefícios a escolhas de consumo sustentável.', en: 'Income transfer programs may stimulate high-carbon consumption. Recommended: link benefits to sustainable consumption choices.', es: 'Los programas de transferencia de ingresos pueden estimular el consumo con alta huella de carbono. Recomendado: vincular beneficios a elecciones de consumo sostenible.' },
  '2-7':   { pt: 'Agricultura intensiva mecanizada depende de combustíveis fósseis. Recomendado: mecanização agrícola elétrica e biodigestores locais.', en: 'Mechanized intensive agriculture depends on fossil fuels. Recommended: electric agricultural machinery and local biodigesters.', es: 'La agricultura mecanizada intensiva depende de combustibles fósiles. Recomendado: maquinaria agrícola eléctrica y biodigestores locales.' },
  '7-14':  { pt: 'Hidroelétricas e barragens para energia impactam ecossistemas aquáticos. Recomendado: priorizar solar/eólico e estudos de impacto hídrico.', en: 'Hydropower dams for energy impact aquatic ecosystems. Recommended: prioritize solar/wind and conduct hydraulic impact studies.', es: 'Las represas hidroeléctricas impactan ecosistemas acuáticos. Recomendado: priorizar solar/eólico y realizar estudios de impacto hídrico.' },
  '11-14': { pt: 'Urbanização costeira pode degradar ecossistemas marinhos e estuários. Recomendado: zoneamento urbano costeiro e faixas de proteção ambiental.', en: 'Coastal urbanization can degrade marine ecosystems and estuaries. Recommended: coastal urban zoning and environmental buffer zones.', es: 'La urbanización costera puede degradar ecosistemas marinos y estuarios. Recomendado: zonificación urbana costera y franjas de protección ambiental.' },
  '12-8':  { pt: 'Padrões de consumo responsável podem reduzir o ritmo de crescimento econômico convencional. Recomendado: fomentar modelos de negócio da economia circular como motor de crescimento.', en: 'Responsible consumption patterns may slow conventional economic growth. Recommended: foster circular economy business models as growth engines.', es: 'Los patrones de consumo responsable pueden ralentizar el crecimiento económico convencional. Recomendado: fomentar modelos de negocio de economía circular como motor de crecimiento.' },
};

export function getCoefficient(idA: number, idB: number): number {
  if (idA === idB) return 1.0;
  const lo = Math.min(idA, idB);
  const hi = Math.max(idA, idB);
  const key = `${lo}-${hi}`;
  if (INTER_SDG_COEFFICIENTS[key] !== undefined) return INTER_SDG_COEFFICIENTS[key];
  if (idA === 17 || idB === 17) return 0.60;
  return 0.15;
}

// Structured project template generator
export function generateProject(
  selectedOdsIds: number[],
  inputs: {
    budget: number;
    beneficiaries: number;
    duration: number;
    teamSize: number;
    riskLevel: number; // 0.1 to 1.0 (multiplier for simulation risks)
  },
  lang: 'pt' | 'en' | 'es'
) {
  if (selectedOdsIds.length === 0) return null;

  // Localized texts helper
  const localizedData = {
    pt: {
      projPrefix: 'Iniciativa',
      projMid: 'de Impacto Integrado',
      summary: 'Projeto de transformação social voltado ao desenvolvimento local sustentável, combinando ações intersetoriais baseadas nas metas oficiais dos ODS selecionados.',
      targetAudience: 'Comunidades vulneráveis locais, pequenas lideranças civis, estudantes públicos e moradores de áreas periféricas.',
      timeline: 'Fase 1: Mobilização e alinhamento (Mês 1-2)\nFase 2: Implementação operacional das iniciativas (Mês 3-7)\nFase 3: Avaliação de indicadores e transição comunitária (Mês 8-12)',
      resources: 'Equipe multidisciplinar local, materiais educativos e insumos sustentáveis básicos, recursos financeiros alocados para despesas operacionais.',
      partners: 'Associações de bairro, Instituições acadêmicas públicas, Organizações do Terceiro Setor (ONGs) e Comitês municipais de sustentabilidade.'
    },
    en: {
      projPrefix: 'Integrated Impact',
      projMid: 'Alliance Initiative',
      summary: 'A localized sustainable development project focusing on community empowerment and ecological resilience, structured directly around the objectives of the selected SDGs.',
      targetAudience: 'Vulnerable community households, local civil groups, public school students, and suburban neighborhoods.',
      timeline: 'Phase 1: Multi-stakeholder mapping & planning (Month 1-2)\nPhase 2: Deployment of primary SDG initiatives (Month 3-7)\nPhase 3: Impact evaluation and community-led handover (Month 8-12)',
      resources: 'Multidisciplinary local team, educational materials, eco-friendly operational inputs, and core programmatic funding.',
      partners: 'Local resident coalitions, public universities, regional NGOs, and municipal climate/health departments.'
    },
    es: {
      projPrefix: 'Iniciativa de Impacto',
      projMid: 'Sostenible Integrado',
      summary: 'Proyecto de desarrollo local sostenible enfocado en el empoderamiento comunitario y la resiliencia ecológica, estructurado directamente en torno a los ODS seleccionados.',
      targetAudience: 'Hogares en situación de vulnerabilidad, líderes comunitarios locales, estudiantes y distritos urbanos periféricos.',
      timeline: 'Fase 1: Mapeo y alineación de actores (Mes 1-2)\nFase 2: Implementación operativa de iniciativas clave (Mes 3-7)\nFase 3: Medición de impacto y transferencia autogestionada (Mes 8-12)',
      resources: 'Equipo local multidisciplinar, kits de capacitación y materiales ecológicos, recursos presupuestarios operativos.',
      partners: 'Asociaciones vecinales, universidades públicas, ONGs locales y agencias de desarrollo municipal.'
    }
  }[lang];

  // Draw core SDGs metadata
  const selectedSDGs = SDG_METADATA.filter(ods => selectedOdsIds.includes(ods.id));

  // Suggested Project Name based on first two SDGs
  const firstSDG = selectedSDGs[0];
  const secondSDG = selectedSDGs[1];
  let suggestedName = '';
  if (selectedSDGs.length === 1) {
    suggestedName = `${localizedData.projPrefix} ${firstSDG.name[lang]}`;
  } else {
    suggestedName = `${firstSDG.name[lang]} & ${secondSDG.name[lang]} - ${localizedData.projMid}`;
  }

  // Aggregate checklists/objectives from chosen SDGs
  const objectives: string[] = [];
  const indicators: string[] = [];
  const risksList: string[] = [];

  selectedSDGs.forEach(ods => {
    // Take 1 initiative, 1 indicator, and 1 risk from each ODS to compose the plan
    objectives.push(ods.initiatives[lang][0]);
    indicators.push(ods.indicators[lang][0]);
    risksList.push(ods.risks[lang][0]);
  });

  // Math models for Synergies and Conflicts
  // Synergy Balance Index (SBI): average coefficient between all selected ODS pairs
  let totalCoefficient = 0;
  let pairsCount = 0;
  const connections: Array<{ source: number; target: number; value: number }> = [];
  const tradeoffs: string[] = [];

  for (let i = 0; i < selectedOdsIds.length; i++) {
    for (let j = i + 1; j < selectedOdsIds.length; j++) {
      const val = getCoefficient(selectedOdsIds[i], selectedOdsIds[j]);
      totalCoefficient += val;
      pairsCount++;
      connections.push({
        source: selectedOdsIds[i],
        target: selectedOdsIds[j],
        value: val
      });

      // If negative coefficient, trigger a tradeoff warning with specific message
      if (val < 0) {
        const lo = Math.min(selectedOdsIds[i], selectedOdsIds[j]);
        const hi = Math.max(selectedOdsIds[i], selectedOdsIds[j]);
        const desc = TRADEOFF_DESCRIPTIONS[`${lo}-${hi}`];
        const odsA = SDG_METADATA.find(o => o.id === selectedOdsIds[i])!;
        const odsB = SDG_METADATA.find(o => o.id === selectedOdsIds[j])!;
        const prefix = lang === 'pt'
          ? `Conflito ODS ${odsA.id} × ODS ${odsB.id}: `
          : lang === 'es'
          ? `Conflicto ODS ${odsA.id} × ODS ${odsB.id}: `
          : `Tradeoff SDG ${odsA.id} × SDG ${odsB.id}: `;
        tradeoffs.push(prefix + (desc ? desc[lang] : (
          lang === 'pt' ? 'Tensão estrutural identificada entre estas metas. Monitore indicadores cruzados.'
          : lang === 'es' ? 'Tensión estructural identificada entre estas metas. Monitoree indicadores cruzados.'
          : 'Structural tension identified between these goals. Monitor cross-cutting indicators.'
        )));
      }
    }
  }

  const synergyBalanceIndex = pairsCount > 0 ? (totalCoefficient / pairsCount) : 1.0;

  // EXPLAINABLE SCORING SYSTEM DECOMPOSITION
  // Formula elements:
  // Base Score based on selection coherence (Synergy Balance Index weight)
  // Positive factors: number of SDGs aligned, resource allocation efficiency (beneficiaries / budget, etc.)
  // Negative factors: risk multipliers, duration delays, carbon/externality impacts
  const sbiFactor = Math.max(0, synergyBalanceIndex * 35); // Max 35 points for coherence
  const countFactor = Math.min(30, selectedOdsIds.length * 2.5); // Max 30 points for SDG range
  
  // Resource efficiency ratio: scale based on ($ per beneficiary)
  const costPerBeneficiary = inputs.budget / Math.max(1, inputs.beneficiaries);
  let efficiencyScore = 20;
  if (costPerBeneficiary > 1000) efficiencyScore = 5;
  else if (costPerBeneficiary > 200) efficiencyScore = 12;
  else if (costPerBeneficiary > 20) efficiencyScore = 18;
  
  // Team utilization scale
  const teamPerBeneficiary = inputs.teamSize / Math.max(1, inputs.beneficiaries);
  const teamFactor = teamPerBeneficiary > 0.1 ? 5 : 10; // leaner teams get efficiency bonus

  // Deductions: Risk level impact
  const riskDeduction = Math.round(inputs.riskLevel * 12);
  const conflictDeduction = tradeoffs.length * 6;

  const rawImpactScore = 40 + sbiFactor + countFactor + efficiencyScore + teamFactor - riskDeduction - conflictDeduction;
  const overallImpactScore = Math.min(100, Math.max(10, Math.round(rawImpactScore)));

  // Score contributors details
  const scoreBreakdown = [
    { name: lang === 'pt' ? 'Coerência de Sinergia' : lang === 'es' ? 'Coherencia de Sinergia' : 'Synergy Coherence', value: Math.round(sbiFactor), isPositive: true },
    { name: lang === 'pt' ? 'Amplitude de Metas (ODS)' : lang === 'es' ? 'Amplitud de Metas (ODS)' : 'Goal Amplitude (SDGs)', value: Math.round(countFactor), isPositive: true },
    { name: lang === 'pt' ? 'Eficiência de Custos' : lang === 'es' ? 'Eficiencia de Costos' : 'Cost Efficiency', value: Math.round(efficiencyScore), isPositive: true },
    { name: lang === 'pt' ? 'Fator de Equipe' : lang === 'es' ? 'Factor de Equipo' : 'Team Utilization Factor', value: Math.round(teamFactor), isPositive: true },
    { name: lang === 'pt' ? 'Fator de Risco Operacional' : lang === 'es' ? 'Factor de Riesgo Operacional' : 'Operational Risk Factor', value: -riskDeduction, isPositive: false },
    { name: lang === 'pt' ? 'Dedução de Conflitos Sistêmicos' : lang === 'es' ? 'Deducción de Conflictos' : 'Systemic Conflict Deductions', value: -conflictDeduction, isPositive: false }
  ];

  // Reach and sustainability metrics calculation
  // Reach: logarithmic scale of beneficiaries
  const reachEstimated = Math.round(inputs.beneficiaries * (1.1 + Math.random() * 0.1));
  
  // Sustainability scale: based on duration & synergy balance
  // Projects of longer duration aligned with more synergistic SDGs have higher sustainability scales
  const sustainabilityIndex = Math.min(100, Math.max(20, Math.round(
    (inputs.duration / 24) * 35 + (synergyBalanceIndex * 45) + (inputs.teamSize > 5 ? 20 : 10)
  )));

  // SDG Alignment score: direct relation to the quantity of goals and synergy balance
  const alignmentScore = Math.min(100, Math.max(10, Math.round(
    (selectedOdsIds.length / 17) * 50 + (synergyBalanceIndex * 50)
  )));

  return {
    suggestedName,
    summary: localizedData.summary,
    objectives,
    targetAudience: localizedData.targetAudience,
    timeline: localizedData.timeline,
    indicators,
    resources: localizedData.resources,
    risks: risksList,
    partners: localizedData.partners,
    synergyBalanceIndex: parseFloat(synergyBalanceIndex.toFixed(2)),
    connections,
    tradeoffs,
    overallImpactScore,
    scoreBreakdown,
    reachEstimated,
    sustainabilityIndex,
    alignmentScore,
    costPerBeneficiary: parseFloat(costPerBeneficiary.toFixed(2))
  };
}
