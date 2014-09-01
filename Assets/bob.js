#pragma strict

private var dialog = "Hello...\nWho are you?";
private var text: GUIText;
private var counter = 0.0;

function Start () {
	for (var child: Transform in transform) {
		if (child.name == "Eye") {
			child.renderer.enabled = false;
			
			for (var light: Transform in child) {
				light.light.intensity = 0;
			}
		}
	}
}

function Update () {
	if (text != null) {
		if (counter < dialog.Length) {
			counter += Time.deltaTime * 5;
		}
		
		text.text = dialog.Substring(0, counter);
	}
}

function OnTriggerEnter (other : Collider) {
	if (other.name == "Player") {
		audio.Play();
		for (var child: Transform in transform) {
		if (child.name == "Eye") {
			child.renderer.enabled = true;
			
			for (var light: Transform in child) {
				light.light.intensity = 1;
			}
		}
		
		if (child.name == "Dialog") {
			text = child.guiText;
		}
		
		other.audio.Play();
	}
	}
}