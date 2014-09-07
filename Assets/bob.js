#pragma strict

private var mainCamera: GameObject;
private var movieMode = false;
private var otherAudio: AudioSource;
private var wakeSound = false;
private var player: GameObject;
private var titleText: GameObject;
var titlePrefab: GameObject;
private var titleCreated = false;

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
	if (movieMode) {
	
		if (mainCamera.transform.position.z < 1.5) {
			transform.position.y += 1 * Time.deltaTime;
			
			if (!wakeSound) {
				audio.Play();
				wakeSound = true;
				
				for (var child: Transform in transform) {
					if (child.name == "Eye") {
						child.renderer.enabled = true;
						
						for (var light: Transform in child) {
							light.light.intensity = 1;
						}
					}
					
					if (!player.audio.isPlaying) {
						player.audio.Play();
					}
				}
			}
		}
		
		if (mainCamera.transform.position.y > 375 && !titleCreated) {
			Instantiate(titlePrefab);
			titleCreated = true;
		}
		
		if (mainCamera.transform.position.y > 375) {
		
		}
	
		if (mainCamera.transform.position.z < 1) {
			mainCamera.transform.position.y += 1 * Time.deltaTime;
			if (mainCamera.transform.rotation.x < 0.6) {
				mainCamera.transform.Rotate(Vector3.right * 10 * Time.deltaTime);
			} else {
				mainCamera.transform.position.y += 4 * Time.deltaTime;
				mainCamera.transform.position.z -= 3 * Time.deltaTime;
			}
		} else {
			mainCamera.transform.position.z -= 0.5 * Time.deltaTime;
		}
	}
}

function OnTriggerEnter (other : Collider) {
	if (GameObject.Find("Shard") == null && other.name == "Player") {
		other.name = "disable";
		mainCamera = GameObject.Find("Camera Holder");
		mainCamera.AddComponent(Camera);
		mainCamera.camera.gameObject.AddComponent(GUILayer);
		mainCamera.camera.backgroundColor = Color.black;
		mainCamera.transform.position = Vector3(0, 301.5, 3);
		mainCamera.tag = "MainCamera";
		player = other.gameObject;
		movieMode = true;
	}
}