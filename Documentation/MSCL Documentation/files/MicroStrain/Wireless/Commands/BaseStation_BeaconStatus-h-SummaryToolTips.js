NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BaseStation_BeaconStatus.h",{4082:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4082\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation_BeaconStatus</div></div></div><div class=\"TTSummary\">Contains logic for the base station Get Beacon Status command.</div></div>",4084:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4084\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the beacon status command.</div></div>",4085:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4085\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the command</div></div>",4087:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4087\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a get beacon status Response object</div></div>",4089:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4089\" class=\"NDPrototype NoParameterForm\">BeaconStatus m_result</div><div class=\"TTSummary\">The BeaconStatus that holds the result of the command.</div></div>",4091:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4091\" class=\"NDPrototype NoParameterForm\">BeaconStatus result()</div><div class=\"TTSummary\">Gets the BeaconStatus that holds the result of the response.</div></div>",4092:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4092\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the success response.</div></div>",4093:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4093\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the failure response.</div></div>"});