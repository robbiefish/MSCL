NDSummary.OnToolTipsLoaded("CClass:MipNodeFeatures",{2645:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2645\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",2647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2647\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeFeatures object.</div></div>",2649:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2649\" class=\"NDPrototype NoParameterForm\">MipNodeInfo m_nodeInfo</div><div class=\"TTSummary\">The MipNodeInfo.</div></div>",2651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2651\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;MipNodeFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a MipNodeFeatures pointer based on the given parameters.</div></div>",2652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2652\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the uint16 descriptor value is a Channel field or not.</div></div>",2653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2653\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given MipTypes::DataClass is supported by the Node.</div></div>",2654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2654\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::Command is supported by the Node.</div></div>",2655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2655\" class=\"NDPrototype NoParameterForm\">MipTypes::MipCommands supportedCommands() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported &lt;MipTypes::MipCommands&gt; that are supported by the Node.</div></div>",2656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2656\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given MipTypes::DataClass.</div></div>",2657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2657\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for a given MipTypes::DataClass.</div></div>",2658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2658\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssReceivers&amp; gnssReceiverInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of GnssReceiverInfo for supported GNSS receivers.</div></div>",2659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> CommPortInfo getCommPortInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of DeviceCommPort info objects for each comm port on the device.</div></div>",2660:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2660\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useLegacyIdsForEnableDataStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">true if the device uses Legacy IDs for the IMU/AHRS, GNSS, and EF data sets in the Enable Data Stream command (0x0C, 0x11)</div></div>",2661:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2661\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingUpdateOptionsList supportedHeadingUpdateOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading update control options for this node.</div></div>",2662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2662\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> StatusSelectors supportedStatusSelectors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported device data status selectors for this node.</div></div>",2663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EstimationControlOptions supportedEstimationControlOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the estimation control options supported by this node.</div></div>",2664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2664\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> VehicleModeTypes supportedVehicleModeTypes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported vehicle mode types for this node.</div></div>",2665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveMeasurementModes supportedAdaptiveMeasurementModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive measurement modes supported by this node.</div></div>",2666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2666\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveFilterLevels supportedAdaptiveFilterLevels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive filtering levels supported by this node.</div></div>",2667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2667\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> PpsSourceOptions supportedPpsSourceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PPS source options supported by this device.</div></div>",2668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2668\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioPinModeOptions supportedGpioPinModes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GpioConfiguration::</td><td class=\"PType\">Feature&nbsp;</td><td class=\"PName last\">feature,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">behavior</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Pin Mode options supported by this device based on the selected feature and behavior.</div></div>",2669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2669\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioBehaviorModes supportedGpioBehaviors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">GpioConfiguration::</td><td class=\"PType\">Feature&nbsp;</td><td class=\"PName last\">feature</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GPIO Behavior options supported by this device based on the selected feature.</div></div>",2670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2670\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> GpioFeatureBehaviors supportedGpioFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">pin</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the GPIO Feature options supported by this device for the specified GPIO pin.</div></div>",2671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2671\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GpioPinOptions supportedGpioConfigurations() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a map of supported GPIO configuration options for each supported pin</div></div>"});