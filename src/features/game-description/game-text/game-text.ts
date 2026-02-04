import { Component, Input } from '@angular/core';
import { Game } from '../../../games/game-model';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-game-text',
  imports: [HighlightModule],
  templateUrl: './game-text.html',
  styleUrl: './game-text.css',
})
export class GameText {
  @Input() game?: Game;

  pa1 = `[CreateAssetMenu(fileName = "Enemy Data")]
public class EnemyData : ScriptableObject
{
    [Header("FOV Settings")] 
    [SerializeField, Range(0, 360)] private float angle;
    [SerializeField] private float radius;
    [SerializeField] private LayerMask playerLayerMask;
    
    public float FOVAngle => angle;
    public float FOVRadius => radius;
}`;

  pa2 = `public static class AnimationConstants
{
    public static class Enemy
    {
        // Using Hash instead of String for better performance in the Animator
        public static readonly int Speed = Animator.StringToHash("Speed");  
    }
}`;
  pa3 = `public static GameState CreateNewGameState(string saveName)
{
    var formatter = new BinaryFormatter();
    var directoryPath = Application.persistentDataPath + "/Saves";
    
    if (!Directory.Exists(directoryPath)) Directory.CreateDirectory(directoryPath);

    var savePath = $"{directoryPath}/{saveName}.save";
    var file = File.Create(savePath);
    
    var gameState = new GameState();
    formatter.Serialize(file, gameState);
    file.Close();

    return gameState;
}`;
  pa4 = `public void Show()
{
    winSound.Play();

    DOTween.Sequence()
        .Append(background.DOFade(1f, 0.5f).From(0f))
        .Append(ball.DOFade(1f, 0.5f).From(0f))
        .Append(winText.DOFade(1f, 0.5f).From(0f))
        .SetUpdate(true); // Ensures the animation plays during Time.timeScale = 0
}`;
  pa5 = `public void Initialize(IGameContext gameContext)
{
    enemyControllers = FindObjectsOfType<EnemyController>().ToList();

    foreach (var enemy in enemyControllers)
    {
        enemy.Initialize(gameContext);
        // Delegating local enemy events to a global manager level
        enemy.OnPlayerDetected += () => OnPlayerDetected?.Invoke();
        enemy.OnPlayerLost += () => OnPlayerLost?.Invoke();
    }
}`;
//-------------------------------------------------------------------------------
c1= `void Update()
{
    if (currentTarget != null)
    {
        Vector3 aimAt = new Vector3(currentTarget.transform.position.x, core.transform.position.y, currentTarget.transform.position.z);
        
        // Smoothly interpolating the base and gun rotation towards the enemy
        gun.transform.rotation = Quaternion.Slerp(gun.transform.rotation,
            Quaternion.LookRotation(relativeTargetPosition - gun.transform.position), Time.deltaTime * turretProperties.turnSpeed);

        core.transform.rotation = Quaternion.Slerp(core.transform.rotation,
            Quaternion.LookRotation(aimAt - core.transform.position), Time.deltaTime * turretProperties.turnSpeed);
    }
}`;

c2= `[CreateAssetMenu(fileName = "Data", menuName = "ScriptableObject/EnemyDetails", order = 1)]
public class EnemyDetails : ScriptableObject
{
    public string cName;
    public float speed;
    public int maxHealth;
    public int reward;
}`;

c3= `public class ReturnToPool : MonoBehaviour
{
    public ParticleSystem system;
    public IObjectPool<ParticleSystem> pool;

    private void OnParticleSystemStopped()
    {
        // Instead of destroying the object, we release it back to the pool managed by the LevelManager
        pool.Release(system);
    }
}`;

c4= `public void UpgradeTurretMenu()
{
    var turret = currentClickedTurret.turretProperties;
    if (LevelManager.totalMoney >= turret.cost)
    {
        // Dynamic stat scaling based on the specific upgrade type
        switch (turret.upgrade)
        {
            case UpgradeType.damage: turret.damage *= 1.2f; break;
            case UpgradeType.accuracy: turret.accuracy *= 1.1f; break;
            case UpgradeType.reload: turret.reloadTime *= 0.9f; break;
        }
        LevelManager.totalMoney -= (int)turret.cost;
        turret.cost *= 2; // Doubling the cost for the next level
    }
}`;

c5= `IEnumerator FadeInPanel(CanvasGroup panel)
{
    isFading = true;
    panel.gameObject.SetActive(true);
    float timer = 0f;
    while (timer < fadeDuration)
    {
        timer += Time.deltaTime;
        panel.alpha = Mathf.Lerp(0f, 1f, timer / fadeDuration);
        yield return null;
    }
    isFading = false;
}`;
//-------------------------------------------------------------------------------
m1=`public void Jump(InputAction.CallbackContext context)
{
    if (context.performed && IsGrounded())
    {
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    // Variable jump height: reduces upward velocity when the key is released
    if (context.canceled && rb.velocity.y > 0f)
    {
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}`;
m2=`private void Flip()
{
    isFacingRight = !isFacingRight;
    Vector3 localScale = transform.localScale;
    localScale.x *= -1f; // Inverts the character on the X axis
    transform.localScale = localScale;
}`;
m3=`private void Update()
{
    // Moves the bullet relative to the player's facing direction
    transform.Translate(transform.right * transform.localScale.x * speed * Time.deltaTime);
    
    if (isHitted)
        Destroy(gameObject);
}`;
m4=`void LateUpdate()
{
    Vector3 newPos = new Vector3(followTarget.position.x, followTarget.position.y + yOffSet, -10);
    // Smoothly transition the camera position for a fluid feel
    transform.position = Vector3.Slerp(transform.position, newPos, followSpeed * Time.deltaTime);
}`;











}
