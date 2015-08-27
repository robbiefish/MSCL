NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/InertialNodeInfo.h",{935:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype935\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about an InertialNode.</div></div>",937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype937\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialDeviceInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">supportedDescriptors</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialNodeInfo object.</div></div>",939:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype939\" class=\"NDPrototype NoParameterForm\">Version m_firmwareVersion</div><div class=\"TTSummary\">The firmware Version of the InertialNode (ie. 1.1.14).</div></div>",940:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype940\" class=\"NDPrototype NoParameterForm\">InertialModels::NodeModel m_model</div><div class=\"TTSummary\">The InertialModels::NodeModel of the InertialNode.</div></div>",941:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype941\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_modelName</div><div class=\"TTSummary\">The model name of the InertialNode (ie. &quot;3DM-GX3-35&quot;).</div></div>",942:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype942\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_modelNumber</div><div class=\"TTSummary\">The model number of the InertialNode (ie. &quot;6225-4220&quot;).</div></div>",943:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype943\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_serialNumber</div><div class=\"TTSummary\">The serial number of the InertialNode (ie. &quot;6225-01319&quot;).</div></div>",944:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype944\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_lotNumber</div><div class=\"TTSummary\">The lot number of the InertialNode (ie. &quot;I042Y&quot;).</div></div>",945:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype945\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_deviceOptions</div><div class=\"TTSummary\">The device options of the InertialNode (ie. &quot;5g, 300d/s&quot;).</div></div>",946:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype946\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt; m_supportedDescriptors</div><div class=\"TTSummary\">A vector that contains all the descriptor ids (commands, data types) that the InertialNode supports.</div></div>",948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype948\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the InertialNode.</div></div>",949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype949\" class=\"NDPrototype NoParameterForm\">InertialModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the InertialModels::NodeModel of the InertialNode.</div></div>",950:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype950\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model name of the InertialNode (ie. &quot;3DM-GX3-45&quot;).</div></div>",951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype951\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model number of the InertialNode (ie. &quot;6225-4220&quot;).</div></div>",952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype952\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the InertialNode (ie. &quot;6225-01319&quot;).</div></div>",953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype953\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> lotNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lot number of the InertialNode (ie. &quot;I042Y&quot;).</div></div>",954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype954\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> deviceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the device options of the InertialNode (ie. &quot;5g, 300d/s&quot;).</div></div>",955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype955\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialTypes::ChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given InertialTypes::InertialCategory.</div></div>",956:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype956\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given InertialTypes::InertialCategory is supported by the InertialNode.</div></div>",957:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype957\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given InertialTypes::Command is supported by the InertialNode.</div></div>"});