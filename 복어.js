(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgsghQAjgtArgGQAcgDAKAnQARA8gTA7QgLAggfgfQgdgegqgEQgEAogUAhAgrgJQAAACAAADQABANAAAOQAAAIgBAHAABgTQgTAGgZAEIAAAAAhPhuQAXAiAJAsQACALACAMAgnAXQAfADAMgH");
	this.shape.setTransform(0.8,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2E0C8").s().p("AAKBHQgdgegpgEIADgPIgDgbIAAgFIgCgYQAjgtAsgGQAbgDALAnQAQA8gTA7QgFAQgLAAQgKAAgQgPgAgoAXQASAAAKgFIAAAAIAAAAQgKAFgSAAIAAAAIAAAAIgRgBIARABIAAAAIAAAAgAg8gKQAYgEAWgGQgWAGgYAEg");
	this.shape_1.setTransform(2.6,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#000000"],[0,0.298],-0.7,-1.9,0,-0.7,-1.9,5.5).s().p("AgXAYQgKgKABgOQgBgMAKgKQAKgKANAAQANAAAKAKQAKAKAAAMQAAAOgKAKQgKAJgNAAQgNAAgKgJg");
	this.shape_2.setTransform(-30.3,-18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2.5,1,1).p("AD1AAQgDAAgCgCQABAAABAAQACAAABACQANAAAMABACqAnQAXgCAWAEAgGgCQAfACAfAFABcgnQAYgDAWAMAkNgHQATAAATAAAiQgiQAZgEAZAB");
	this.shape_3.setTransform(9.5,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AIqkjQgBAIgCAIQgIAWgPAOQgEADgDADAIqkjQAAAAAAgBQABAAgBAAQADgRgFgOQAAgBAAAAAIqkjQAtAEAqgBAIPlmQgVAFgWgCAG1AMIAHgyIAJhBAH1ApQgbgRgjgLQgBAAgBgBQgBAHgBAFQgHAbgQAWQhDBmhaBQQhuBkiOADQAZANAKAdQAWA9g7ABQgvABg3gMQgLgpAogjAJNBpQAAAIgDAHQgEAHgGAGAJ/B7QgFALgGALQgCADgCADQgIANgNAKQgOALgPAKAD+GpQgFAQgDASQAAAFgCAFAhIFqQAJAAAIAAQAegBAcgDAghFxQgDARAMARAn8m1QggAfgbAoQgYAlgVAtQAPAFAEAJQAEAJADAKQADAKAEA0QABABABABQABABABACQABABAAADIAGgDAkuo6QAFgCAFgBAkyo2QAJAGAJAIQAAABABABQAlAjAAAzQAAAyglAjQglAkg0AAQg0AAglgkQgbgagHgjApGivQgWAagkAEIAAAAAjWGqQgBASAJAQQAIAOAMAMQAFAEAGAEAlWGsQAHAMAHANQAFAKAFAJQAJAPAKANQALAOANAMQAMAMAOAKQALAJAMAHQAHADAGAEQAEABAEAC");
	this.shape_4.setTransform(11.9,26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.3,1,1).p("AGXjrQhPhXhghCQhihEh0gRQh0gOh2ALQhKAIhJAPAIqjxQgkAOgmAXQgGgSgSgQQgBAAAAAAQAngZAbglQAfgoAugLQAwgLAhAgQAfAdAOArQARAzgTArQgTAtgkAbQgkAbgvAAQgjAAgfgSQgegSgngMIAAAAQggAegmASQACAIABAJQAFAhgGAeQAugNAwAKQAdAGACAeQAEAwgLAsQgIAbgRAUQgLAOgQALQgrAcgqggQgMgJgKgGAqAg/QB9gbCMggQCNggBZADQBZADAkAGQAjAGApADQAoADAmAFQAnAFAogHQAogHAugCQAkgEAkgHQAlgFAkgJQARgGASgGAF0BQQAfgBAdgBArIgZQgQgEgCgLQgCgLACgJQABgHAFgFQAIgIAKgFQABgJgFgFQgHgKgFgLQgDgIACgJQABgIAHgGQAIgIALgGIAMABAo7lAQgCgLAAgNQAAgyAkgkQAlgkA0AAQAoAAAeAUAiQHiQhBAAhEgIQg5gGg7gNQgZgFgZgHQiegnhHiCQhIiCAjii");
	this.shape_5.setTransform(19,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#CCCCCC"],[0.525,1],49.4,5.4,0,49.4,5.4,73).s().p("AAAgCIAAAAIABAFg");
	this.shape_6.setTransform(-52.1,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhXBVQgcgagHgjQgCgMAAgMQAAgxAlgjQAkgkAzAAQAnAAAfAUQAJAGAIAIIABACQAlAjAAAxQAAAyglAjQgkAkg0AAQgzAAgkgkg");
	this.shape_7.setTransform(-25.9,-20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AAIAJQgIgIgIgEIAEgEIAIgDIAFAVIgBgCg");
	this.shape_8.setTransform(-17.9,-29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,17,17,0.502)").s().p("AgZBFQgQgDgCgLQgCgLACgKQABgGAFgFQAIgIAKgGQABgIgFgDQgHgKgFgLQgDgJACgIQABgIAHgGQAIgIALgHIAKACQAPAFAEAJIAHATQADAKAEAxIACADIACADIABADIAGgCQgCAGgMACQgWAagiADg");
	this.shape_9.setTransform(-49.7,4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#CCCCCC"],[0.612,1],-21,-7,0,-21,-7,79).s().p("Aj0AUIAKAAQAOgCAEAEIgcgCgADvgVIADAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQgDAAgDgCg");
	this.shape_10.setTransform(9.5,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#CCCCCC"],[0.612,0.945],-5.4,-26,0,-5.4,-26,66).s().p("AieFAQg4gHg7gMIgzgMQiegnhHiCQhHiAAiikIgCgHQAjgEAWgaQAMgCACgGQB+gbCLggQCOggBYADQBXADAlAGQAlAGAoADQAoADAnAFQAmAEAogGQAogHAugCQAkgEAkgHQAlgFAkgJIAjgMIAEABIAAAAIAAABIgEAQQgIAWgPAOIgGAGIgBAAQggAegmASIADARQAFAhgGAgIgJBBIgHA0IgCAMQgHAZgQAWQhDBmhaBQQhtBkiOADIg6AEIgSAAIgFAAQg+AAhCgIgAglihQgtAEgjAjIAFAtIgEALQAqAEAfAXQAfAYALgZQARgugQgwQgIgcgYAAIgFABgAjAi4QgFgEgNABIgKAAIAcADgADui5IgBAAQgOgDgOAAIAAAAIgBAAIgPABIAPgBIABAAIAAAAQAOAAAOADIABAAgABQjdQgfgHghgBQAhABAfAHgAEljgIgBgBQgLgCgLAAIgBAAIgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgDAAQADACACAAIABAAIABAAQALAAALACIABABIAAAAgAjPjqIgmAAIAmAAgAChkCIAAAAQgRgJgTAAIgBAAIAAAAIgIAAIAIAAIAAAAIABAAQATAAARAJIAAAAgAh4kGIACAAIADgBIAAAAIAAAAIABAAQAPgCAPAAIABAAIAAAAIALABIACAAIgCAAIgLgBIAAAAIgBAAQgPAAgPACIgBAAIAAAAIAAAAIgDABIgCAAg");
	this.shape_11.setTransform(7.1,29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C2E0C8").s().p("AnDHJQgLgpAogjIAAgNIARAAIA8gEQAZANAKAdQAWA9g7ABIgIABQgtAAgzgMgAl2GZQgJgNAAgOIAAgHIAAAHQAAAOAJANgABTBeIgVgPQAPgWAHgbIAFgLIgCAAIAHgzIAJhBQAtgNAxAKQAcAGADAeQAEAwgMAqQgHAbgRAVQgMANgQALQgUANgTAAQgXAAgXgRgACXAvQgbgRgjgLQAjALAbARgABeggIA7gCIg7ACgADwjFQgfgSgmgMIAGgGQAQgOAHgWIAEgQIAAAAIAAgBQADgQgFgPIAAgBQgHgSgRgQIgCABQAogaAbglQAegoAugLQAwgLAiAgQAeAdAPArQARAzgTArQgUAtgjAbQglAbguAAQgkAAgegSgAEZkZIAFAAIAFgBIgFABIgFAAIAAAAIgBAAQgkAAgogEQAoAEAkAAIABAAIAAAAgADKk+QAlgXAkgOQgkAOglAXg");
	this.shape_12.setTransform(46.9,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18395A").s().p("AoiDOIgCgDIgCgCQgEgzgDgKIgHgUQgEgJgPgFQAVgtAYglQAbgmAggfIAJgCQAHAiAbAZQAlAjA0AAQA0AAAlgjQAlgiAAgyQAAgyglgkIgFgWQBJgQBLgIQB0gLB1AOQB1ARBhBEQBhBCBOBVIAFAAQAXACAUgEIACgBQARAQAHASIAAABQAFAOgDARIgDgBIgkAMQgkAJgkAFQgkAHglAEQguACgoAHQgnAHgngFQgmgFgpgDQgogDglgGQglgGhWgDQhZgDiOAgQiLAgh9AbIgGADIgBgEg");
	this.shape_13.setTransform(9,-12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-34.8,148.6,119.7);


(lib.bellyfish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,19,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-59.8,148.6,119.7);


// stage content:
(lib.복어 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.fish5_mc = new lib.bellyfish();
	this.fish5_mc.parent = this;
	this.fish5_mc.setTransform(421,298);

	this.fish4_mc = new lib.bellyfish();
	this.fish4_mc.parent = this;
	this.fish4_mc.setTransform(92,324);

	this.fish3_mc = new lib.bellyfish();
	this.fish3_mc.parent = this;
	this.fish3_mc.setTransform(252,217.1);

	this.fish2_mc = new lib.bellyfish();
	this.fish2_mc.parent = this;
	this.fish2_mc.setTransform(381,111.1);

	this.instance = new lib.bellyfish();
	this.instance.parent = this;
	this.instance.setTransform(123,113.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.fish2_mc},{t:this.fish3_mc},{t:this.fish4_mc},{t:this.fish5_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.2,251.7,476.8,331.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;