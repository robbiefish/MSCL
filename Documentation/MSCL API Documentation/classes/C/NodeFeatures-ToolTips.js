NDContentPage.OnToolTipsLoaded({1613:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1613\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",1629:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1629\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",1853:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1853\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",1865:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1865\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",1968:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1968\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td></td><td class=\"PName last\">dataMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawChannels,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelMasks&nbsp;</td><td></td><td class=\"PName last\">derivedChannelMasks,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawSampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td></td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",1982:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1982\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::WirelessSampleRates sampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SamplingMode&nbsp;</td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataCollectionMethod&nbsp;</td><td class=\"PName last\">dataCollectionMethod,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataMode&nbsp;</td><td class=\"PName last\">dataMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::WirelessSampleRates that are supported by this Node for the given sampling mode.</div></div>",1995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1995\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> InputRanges inputRanges(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of InputRanges that are supported by this Node for the specified channel mask.</div></div>",2172:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",2176:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",2186:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",2193:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",2217:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",2348:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of channels on Wireless Nodes.</div></div>",2361:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the possible voltage input types</div></div>",2364:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",2377:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the Transducer types supported by some Wireless Nodes.</div></div>",2412:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",2467:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",2514:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",2521:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",2561:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",2565:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",2568:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",2705:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",2710:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",2724:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",2727:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",2737:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",2754:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",2764:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2764\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessChannel</div></div></div><div class=\"TTSummary\">Represents a channel on a WirelessNode. This can be used to gain information about the channel, view current settings that are applied, and update settings on the Node.</div></div>",3022:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3022\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",3173:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3173\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",3245:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3245\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",3320:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3320\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",3467:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3467\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",1864:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1864\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures_200series</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a 200-series WirelessNode.&nbsp; Inherits from NodeFeatures.</div></div>"});