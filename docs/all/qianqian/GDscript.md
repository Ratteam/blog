
## error
```
[Ignore]Line 32 (RETURN_VALUE_DISCARDED):The function 'move_and_slide()' returns a value, but this value is never used
 [忽略]第32行(RETURN_VALUE_DISCARDED)：函数“move_and_slide()”返回一个值，但从未使用此值

move_and_slide(velocity) 改为: velocity = move_and_slide(velocity)
```

```
W 0:00:01.464   _update_root_rect: Font oversampling only works with the resize modes 'Keep Width', 'Keep Height', and 'Expand'.
  <C++ Source>  scene/main/scene_tree.cpp:1153 @ _update_root_rect()
  W0：00：01.464_update_root_rect：Font过采样只适用于调整大小的模式‘Keep宽度’、‘Keep高度’和‘Expand‘。
 <c     来源>场景/主/scene_tree.cpp：1153@_update_root_rect(

Project——Project Settings——General——Display——Window——Stretch——Aspect——Keep
```

## void _ready() virtual

Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their _ready() callbacks get triggered first, and the parent node will receive the ready notification afterwards.
当节点“就绪”时调用，即。 当节点及其子节点都进入场景树时。 如果节点有子节点，则首先触发它们的_ready()回调，然后父节点将收到就绪通知。 

Corresponds to the NOTIFICATION_READY notification in Object._notification(). See also the onready keyword for variables.
对应于Object._notification()中的NOTIFICATION_READY通知。 还请参阅变量的onready关键字。 通常用于初始化。 

Usually used for initialization. For even earlier initialization, Object._init() may be used. See also _enter_tree().
对于更早的初始化，可以使用Object._init()。 另见_enter_tree()。 

Note: _ready() may be called only once for each node. After removing a node from the scene tree and adding again, _ready will not be called for the second time. This can be bypassed with requesting another call with request_ready(), which may be called anywhere before adding the node again.
注意：每个节点只能调用一次_ready()。从场景树中移除一个节点并再次添加后，将不会第二次调用_ready。 这可以通过请求另一个带有request_ready()的调用来绕过，在再次添加节点之前，可以在任何地方调用该调用。

## void _physics_process(delta: float) virtual

Called during the physics processing step of the main loop. Physics processing means that the frame rate is synced to the physics, i.e. the delta variable should be constant.
在主循环的物理处理步骤中调用。 物理处理意味着帧速率与物理同步，即。 增量变量应该是常数。

It is only called if physics processing is enabled, which is done automatically if this method is overridden, and can be toggled with set_physics_process().
只有在启用物理处理时才调用它，如果此方法被重写，则自动完成，并且可以与set_physics_process()切换。

Corresponds to the NOTIFICATION_PHYSICS_PROCESS notification in Object._notification().
对应于Object._notification()中的NOTIFICATION_PHYSICS_PROCESS通知。

Note: This method is only called if the node is present in the scene tree (i.e. if it's not orphan).
注意：只有当节点存在于场景树（即场景树）时才调用此方法。 如果不是孤儿)。

## void _process(delta: float) virtual

Called during the processing step of the main loop. Processing happens at every frame and as fast as possible, so the delta time since the previous frame is not constant.
在主循环的处理步骤中调用。 处理发生在每个帧，并且尽可能快，因此自上一个帧以来的增量时间不是恒定的。

It is only called if processing is enabled, which is done automatically if this method is overridden, and can be toggled with set_process().
只有当启用了处理时才调用它，如果此方法被重写，则自动完成处理，并且可以与set_process()切换。

Corresponds to the NOTIFICATION_PROCESS notification in Object._notification().
对应于Object._notification()中的NOTIFICATION_PROCESS通知。

Note: This method is only called if the node is present in the scene tree (i.e. if it's not orphan).
注意：此方法仅在节点i时调用 我们出现在场景树中(即。 如果不是孤儿)。

## Plane normalized()

Returns a copy of the plane, normalized.
返回平面的副本，归一化。

## Class: KinematicBody2D
Inherits: PhysicsBody2D < CollisionObject2D < Node2D < CanvasItem < Node < Object
继承：物理Body2D<碰撞对象2D<节点2D<画布项<节点<对象

Kinematic body 2D node.
运动学本体2D节点。

Description
说明

Kinematic bodies are special types of bodies that are meant to be user-controlled. They are not affected by physics at all; to other types of bodies, such as a character or a rigid body, these are the same as a static body. However, they have two main uses:
运动学物体是一种特殊类型的物体，它是由用户控制的。 它们根本不受物理的影响；对于其他类型的物体，如一个字符或一个刚体，这些都与一个静态的物体相同。 然而，它们有两个主要用途：

Simulated motion: When these bodies are moved manually, either from code or from an AnimationPlayer (with AnimationPlayer.playback_process_mode set to "physics"), the physics will automatically compute an estimate of their linear and angular velocity. This makes them very useful for moving platforms or other AnimationPlayer-controlled objects (like a door, a bridge that opens, etc).
模拟运动：当这些物体被手动移动时，无论是从代码还是从动画播放器(动画播放器。playback_process_mode设置为“物理”)，物理将自动计算它们的线速度和角速度的估计。 这使得它们对于移动平台或其他动画播放器控制的对象（如门、打开的桥等)非常有用）。

Kinematic characters: KinematicBody2D also has an API for moving objects (the move_and_collide() and move_and_slide() methods) while performing collision tests. This makes them really useful to implement characters that collide against a world, but that don't require advanced physics.
运动学特性：在执行碰撞测试时，运动学Body2D还有一个用于移动对象(move_and_collide()和move_and_slidemove_and_collide（)方法）的API。 这使得它们在实现与世界碰撞的字符方面非常有用，但这不需要高级物理。

Online Tutorials
Kinematic character (2D)
docs.godotengine.org/en/latest/tutorials/physics/using_kinematic_body_2d.html
在线教程
运动学特征(2D)
docs.godotengine.org/en/latest/tutorials/physics/using_kinematic_body_2d.html

Properties
floatcollision/safe_margin [default: 0.08]boolmotion/sync_to_physics [default: false]
属性
浮动碰撞/safe_margin[默认值：0.08]引导/sync_to_physics[默认值：false]

Methods
方法

Vector2get_floor_normal() constVector2get_floor_velocity() constKinematicCollision2Dget_slide_collision(slide_idx: int)intget_slide_count() constboolis_on_ceiling() constboolis_on_floor() constboolis_on_wall() constKinematicCollision2Dmove_and_collide(rel_vec: Vector2, infinite_inertia: bool = true, exclude_raycast_shapes: bool = true, test_only: bool = false)Vector2move_and_slide(linear_velocity: Vector2, up_direction: Vector2 = Vector2( 0, 0 ), stop_on_slope: bool = false, max_slides: int = 4, floor_max_angle: float = 0.785398, infinite_inertia: bool = true)Vector2move_and_slide_with_snap(linear_velocity: Vector2, snap: Vector2, up_direction: Vector2 = Vector2( 0, 0 ), stop_on_slope: bool = false, max_slides: int = 4, floor_max_angle: float = 0.785398, infinite_inertia: bool = true)booltest_move(from: Transform2D, rel_vec: Vector2, infinite_inertia: bool = true)

Property Descriptions
财产说明

float collision/safe_margin [default: 0.08]set_safe_margin(value) setterget_safe_margin() getter
浮动碰撞/safe_margin[默认值：0.08]set_safe_margin（值）setterget_safe_margin()getter

If the body is at least this close to another body, this body will consider them to be colliding.
如果身体至少接近另一个身体，这个身体会认为它们在碰撞。

bool motion/sync_to_physics [default: false]set_sync_to_physics(value) setteris_sync_to_physics_enabled() getter
布尔运动/sync_to_physics[默认值：false]set_sync_to_physics（值）setteris_sync_to_physics_enabled()getter

If true, the body's movement will be synchronized to the physics frame. This is useful when animating movement via AnimationPlayer, for example on moving platforms. Do not use together with move_and_slide() or move_and_collide() functions.
如果是真的，身体的运动将同步到物理框架。 这是有用的动画运动通过动画播放器，例如在移动平台。 不要与move_and_slide()或move_and_collidemove_and_slide()功能一起使用。

Method Descriptions
方法说明

Vector2 get_floor_normal() const
向量2get_floor_normal()const

Returns the surface normal of the floor at the last collision point. Only valid after calling move_and_slide() or move_and_slide_with_snap() and when is_on_floor() returns true.
在最后一个碰撞点返回地板的表面正常。 只有在调用move_and_slide()或move_and_slide_with_snapmove_and_slide()后以及is_on_floormove_and_slide()返回true时才有效。

Vector2 get_floor_velocity() const
向量2get_floor_velocity()const

Returns the linear velocity of the floor at the last collision point. Only valid after calling move_and_slide() or move_and_slide_with_snap() and when is_on_floor() returns true.
返回地板在最后一个碰撞点的线速度。 只有在调用move_and_slide()或move_and_slide_with_snapmove_and_slide()后以及is_on_floormove_and_slide()返回true时才有效。

KinematicCollision2D get_slide_collision(slide_idx: int)
运动学碰撞2D get_slide_collision(slide_idx：int)

Returns a KinematicCollision2D, which contains information about a collision that occurred during the last move_and_slide() call. Since the body can collide several times in a single call to move_and_slide(), you must specify the index of the collision in the range 0 to (get_slide_count() - 1).
返回一个运动学碰撞2D，它包含在上一次move_and_slide()调用期间发生的碰撞的信息。 由于身体可以在一次对move_and_slide()的调用中碰撞几次，所以必须指定碰撞的索引范围为0到(get_slide_countmove_and_slide（)-1）。

Example usage:
示例用法：

for i in get_slide_count():
    var collision = get_slide_collision(i)
    print("Collided with: ", collision.collider.name)

int get_slide_count() const

Returns the number of times the body collided and changed direction during the last call to move_and_slide().
返回在上次呼叫move_and_slide()期间身体碰撞和改变方向的次数。

bool is_on_ceiling() const

Returns true if the body is on the ceiling. Only updates when calling move_and_slide().
如果身体在天花板上，则返回true。 只在调用move_and_slide()时更新。

bool is_on_floor() const

Returns true if the body is on the floor. Only updates when calling move_and_slide().
如果身体在地板上，则返回true。 只在调用move_and_slide()时更新。

bool is_on_wall() const

Returns true if the body is on a wall. Only updates when calling move_and_slide().
如果身体在墙上，则返回true。 只在调用move_and_slide()时更新。

KinematicCollision2D move_and_collide(rel_vec: Vector2, infinite_inertia: bool = true, exclude_raycast_shapes: bool = true, test_only: bool = false)

Moves the body along the vector rel_vec. The body will stop if it collides. Returns a KinematicCollision2D, which contains information about the collision.
沿着矢量rel_vec移动身体。 如果它碰撞，身体就会停止。 返回一个运动学碰撞2D，其中包含有关碰撞的信息。

If test_only is true, the body does not move but the would-be collision information is given.
如果test_only是真的，身体不会移动，但会给出碰撞信息。

Vector2 move_and_slide(linear_velocity: Vector2, up_direction: Vector2 = Vector2( 0, 0 ), stop_on_slope: bool = false, max_slides: int = 4, floor_max_angle: float = 0.785398, infinite_inertia: bool = true)

Moves the body along a vector. If the body collides with another, it will slide along the other body rather than stop immediately. If the other body is a KinematicBody2D or RigidBody2D, it will also be affected by the motion of the other body. You can use this to make moving or rotating platforms, or to make nodes push other nodes.
沿着矢量移动身体。 如果身体与另一个身体碰撞，它会沿着另一个身体滑动，而不是立即停止。 如果另一个身体是运动体2D或刚体2D，它也会受到另一个身体的运动的影响。 您可以使用这个来制作移动或旋转平台，或者使节点推动其他节点。








This method should be used in Node._physics_process() (or in a method called by Node._physics_process()), as it uses the physics step's delta value automatically in calculations. Otherwise, the simulation will run at an incorrect speed.
这种方法应该在Node._physics_process()(或Node._physics_process（)调用的方法）中使用，因为它在计算中自动使用物理步骤的增量值。 否则，模拟将以不正确的速度运行。

linear_velocity is the velocity vector in pixels per second. Unlike in move_and_collide(), you should not multiply it by delta — the physics engine handles applying the velocity. 
linear_velocity是每秒以像素为单位的速度矢量。 与move_and_collide()不同的是，你不应该把它乘以增量-物理引擎处理应用速度。 

up_direction is the up direction, used to determine what is a wall and what is a floor or a ceiling. If set to the default value of Vector2(0, 0), everything is considered a wall. This is useful for topdown games.
up_direction是向上的方向，用来确定什么是墙，什么是地板或天花板。 如果设置为Vector2（0，0）的默认值，则所有内容都被视为墙。 这对于自上而下的游戏是有用的。

If stop_on_slope is true, body will not slide on slopes when you include gravity in linear_velocity and the body is standing still.
如果stop_on_slope是真的，当你在linear_velocity中包含重力和身体静止时，身体不会在斜坡上滑动。

If the body collides, it will change direction a maximum of max_slides times before it stops.
如果身体碰撞，它会在停止之前改变方向最大max_slides次。

floor_max_angle is the maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall. The default value equals 45 degrees.
floor_max_angle是最大角度（弧度)，其中斜坡仍然被认为是地板(或天花板），而不是墙。默认值等于45度。

If infinite_inertia is true, body will be able to push RigidBody2D nodes, but it won't also detect any collisions with them. If false, it will interact with RigidBody2D nodes like with StaticBody2D.
如果infinite_inertia是真的，Body将能够推动刚性Body2D节点，但它也不会检测到与它们的任何碰撞。 如果为false，它将与刚性Body2D节点交互，如与静态Body2D交互。

Returns the linear_velocity vector, rotated and/or scaled if a slide collision occurred. To get detailed information about collisions that occurred, use get_slide_collision().
返回linear_velocity向量，如果发生幻灯片碰撞，则旋转和/或缩放。 要获得有关发生碰撞的详细信息，请使用get_slide_collision()。

Vector2 move_and_slide_with_snap(linear_velocity: Vector2, snap: Vector2, up_direction: Vector2 = Vector2( 0, 0 ), stop_on_slope: bool = false, max_slides: int = 4, floor_max_angle: float = 0.785398, infinite_inertia: bool = true)

Moves the body while keeping it attached to slopes. Similar to move_and_slide().
移动身体，同时保持它附着在斜坡上。 类似于move_and_slide()。

As long as the snap vector is in contact with the ground, the body will remain attached to the surface. This means you must disable snap in order to jump, for example. You can do this by setting snap to (0, 0) or by using move_and_slide() instead.
只要Snap矢量与地面接触，物体就会保持附着在表面上。 这意味着您必须禁用快照才能跳转，例如。 您可以通过将快照设置为（0，0）或使用move_and_slide()来完成此操作。

bool test_move(from: Transform2D, rel_vec: Vector2, infinite_inertia: bool = true)

Checks for collisions without moving the body. Virtually sets the node's position, scale and rotation to that of the given Transform2D, then tries to move the body along the vector rel_vec. Returns true if a collision would occur
在不移动身体的情况下检查碰撞。 实际上，将节点的位置、比例和旋转设置为给定的Transform2D，然后尝试沿着向量rel_vec移动身体。 如果发生碰撞，返回true

## Class:AnimationPlayer
继承：节点<对象

Inherits: Node < Object

Container and player of Animation resources.
动画资源的容器和播放器。

Description
说明

An animation player is used for general-purpose playback of Animation resources. It contains a dictionary of animations (referenced by name) and custom blend times between their transitions. Additionally, animations can be played and blended in different channels.
动画播放器用于动画资源的通用播放。 它包含动画字典（按名称引用）和它们转换之间的自定义混合时间。 此外，动画可以在不同的频道播放和混合。

AnimationPlayer is more suited than Tween for animations where you know the final values in advance. For example, fading a screen in and out is more easily done with an AnimationPlayer node thanks to the animation tools provided by the editor. That particular example can also be implemented with a Tween node, but it requires doing everything by code.
动画播放器比吐温更适合动画，在那里你提前知道最终的值。 例如，由于编辑器提供的动画工具，使用AnimationPlayer节点更容易对屏幕的进出进行衰落。 这个特殊的示例也可以用吐温节点实现，但它需要通过代码来完成所有事情。

Updating the target properties of animations occurs at process time.
更新动画的目标属性发生在处理时间。

Tutorials
•Animations
•Animation
教程
 ·模拟
 ·幻想

Properties
属性

String assigned_animation   
String autoplay "" 
String current_animation "" 
float current_animation_length   
float current_animation_position   
AnimationMethodCallMode method_call_mode 0 
bool playback_active   
float playback_default_blend_time 0.0 
AnimationProcessMode playback_process_mode 1 
float playback_speed 1.0 
NodePath root_node NodePath("..") 

Methods
方法

Error add_animation ( String name, Animation animation ) 
void advance ( float delta ) 
String animation_get_next ( String anim_from ) const 
void animation_set_next ( String anim_from, String anim_to ) 
void clear_caches ( ) 
void clear_queue ( ) 
String find_animation ( Animation animation ) const 
Animation get_animation ( String name ) const 
PoolStringArray get_animation_list ( ) const 
float get_blend_time ( String anim_from, String anim_to ) const 
float get_playing_speed ( ) const 
PoolStringArray get_queue ( ) 
bool has_animation ( String name ) const 
bool is_playing ( ) const 
void play ( String name="", float custom_blend=-1, float custom_speed=1.0, bool from_end=false ) 
void play_backwards ( String name="", float custom_blend=-1 ) 
void queue ( String name ) 
void remove_animation ( String name ) 
void rename_animation ( String name, String newname ) 
void seek ( float seconds, bool update=false ) 
void set_blend_time ( String anim_from, String anim_to, float sec ) 
void stop ( bool reset=true ) 


Signals
信号

•animation_changed ( String old_name, String new_name )

If the currently being played animation changes, this signal will notify of such change.
如果当前正在播放的动画更改，此信号将通知此更改。

•animation_finished ( String anim_name )

Notifies when an animation finished playing.
通知动画何时完成播放。

•animation_started ( String anim_name )

Notifies when an animation starts playing.
通知动画何时开始播放。

•caches_cleared ( )

Notifies when the caches have been cleared, either automatically, or manually via clear_caches.
通知缓存何时已被清除，或者自动清除，或者通过clear_caches手动清除。

Enumerations
数字

财产说明
·固定assigned_animation

较好的set_assigned_animation（值）
更好的get_assigned_animation()

如果播放，则当前动画；否则，动画最后播放。 设置时，将更改动画，但不会播放它，除非当前播放。
 
enum AnimationProcessMode:
枚举动画处理模式：
•ANIMATION_PROCESS_PHYSICS = 0 --- Process animation during the physics process. This is especially useful when animating physics bodies.
ANIMATION_PROCESS_PHYSICS=0-物理过程中的过程动画。 这在激发物理体的活力时特别有用。
•ANIMATION_PROCESS_IDLE = 1 --- Process animation during the idle process.
ANIMATION_PROCESS_IDLE=1-空闲过程中的过程动画。
•ANIMATION_PROCESS_MANUAL = 2 --- Do not process animation. Use advance to process the animation manually.
ANIMATION_PROCESS_MANUAL=2-不要处理动画。 使用预先手动处理动画。

enum AnimationMethodCallMode:
枚举动画方法调用模式：
•ANIMATION_METHOD_CALL_DEFERRED = 0 --- Batch method calls during the animation process, then do the calls after events are processed. This avoids bugs involving deleting nodes or modifying the AnimationPlayer while playing.
在动画过程中ANIMATION_METHOD_CALL_DEFERRED=0-批处理方法调用，然后在事件处理后进行调用。 这避免了在播放时删除节点或修改动画播放器的错误。
•ANIMATION_METHOD_CALL_IMMEDIATE = 1 --- Make method calls immediately when reached in the animation.
ANIMATION_METHOD_CALL_IMMEDIATE=1-在动画中达到时立即调用方法。

Property Descriptions
财产说明
•String assigned_animation

Setter set_assigned_animation(value) 
Getter get_assigned_animation() 

If playing, the current animation; otherwise, the animation last played. When set, would change the animation, but would not play it unless currently playing. See also current_animation.
如果播放，则当前动画；否则，动画最后播放。 设置时，将更改动画，但不会播放它，除非当前播放。 另见current_animation。

•String autoplay

Default "" 
Setter set_autoplay(value) 
Getter get_autoplay() 

The name of the animation to play when the scene loads.
场景加载时要播放的动画名称。

•String current_animation

Default "" 
Setter set_current_animation(value) 
Getter get_current_animation() 

The name of the current animation, "" if not playing anything. When being set, does not restart the animation. See also play.
当前动画的名称，“如果不播放任何东西。 设置时，不重启动画。 看也玩。

•float current_animation_length

Getter get_current_animation_length() 

The length (in seconds) of the currently being played animation.
当前正在播放的动画的长度(以秒为单位。

•float current_animation_position

Getter get_current_animation_position() 

The position (in seconds) of the currently playing animation.
当前播放动画的位置(以秒为单位。

•AnimationMethodCallMode method_call_mode

Default 0 
Setter set_method_call_mode(value) 
Getter get_method_call_mode() 

The call mode to use for Call Method tracks.
用于调用方法跟踪的调用模式。

•bool playback_active

Setter set_active(value) 
Getter is_active() 

If true, updates animations in response to process-related notifications.
如果为真，则根据与进程相关的通知更新动画。

•float playback_default_blend_time

Default 0.0 
Setter set_default_blend_time(value) 
Getter get_default_blend_time() 

The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision.
混合动画的默认时间。 范围从0到4096，精度为0.01。

•AnimationProcessMode playback_process_mode

Default 1 
Setter set_animation_process_mode(value) 
Getter get_animation_process_mode() 

The process notification in which to update animations.
更新动画的过程通知。

•float playback_speed

Default 1.0 
Setter set_speed_scale(value) 
Getter get_speed_scale() 

The speed scaling ratio. For instance, if this value is 1, then the animation plays at normal speed. If it's 0.5, then it plays at half speed. If it's 2, then it plays at double speed.
速缩比例。 例如，如果此值为1，则动画以正常速度播放。 如果它是0.5，那么它以半速播放。 如果是2，那么它以双速播放。

•NodePath root_node

Default NodePath("..") 
Setter set_root(value) 
Getter get_root() 

The node from which node path references will travel.
节点路径引用将从其中移动的节点。

Method Descriptions
方法说明
•Error add_animation ( String name, Animation animation )

Adds animation to the player accessible with the key name.
添加动画到可访问的播放器与密钥名称。

•void advance ( float delta )

Shifts position in the animation timeline and immediately updates the animation. delta is the time in seconds to shift. Events between the current frame and delta are handled.
在动画时间线中移动位置，并立即更新动画。 增量是以秒为单位的移动时间。 处理当前帧和增量之间的事件。

•String animation_get_next ( String anim_from ) const

Returns the name of the next animation in the queue.
返回队列中下一个动画的名称。

•void animation_set_next ( String anim_from, String anim_to )

Triggers the anim_to animation when the anim_from animation completes.
当anim_from动画完成时触发anim_to动画。

•void clear_caches ( )

AnimationPlayer caches animated nodes. It may not notice if a node disappears; clear_caches forces it to update the cache again.
动画播放器缓存动画节点。 它可能不会注意到节点是否消失；clear_caches强迫它再次更新缓存。

•void clear_queue ( )

Clears all queued, unplayed animations.
清除所有排队，未播放的动画。

•String find_animation ( Animation animation ) const

Returns the name of animation or an empty string if not found.
如果没有找到，则返回动画或空字符串的名称。

•Animation get_animation ( String name ) const

Returns the Animation with key name or null if not found.
如果没有找到，则返回带有键名或空的动画。

•PoolStringArray get_animation_list ( ) const

Returns the list of stored animation names.
返回存储的动画名称列表。

•float get_blend_time ( String anim_from, String anim_to ) const

Gets the blend time (in seconds) between two animations, referenced by their names.
获取两个动画之间的混合时间（以秒为单位），由它们的名称引用。

•float get_playing_speed ( ) const

Gets the actual playing speed of current animation or 0 if not playing. This speed is the playback_speed property multiplied by custom_speed argument specified when calling the play method.
获取当前动画的实际播放速度或如果不播放则为0。 此速度是调用play方法时指定custom_speed playback_speed属性乘以参数。

•PoolStringArray get_queue ( )

Returns a list of the animation names that are currently queued to play.
返回当前排队播放的动画名称列表。

•bool has_animation ( String name ) const

Returns true if the AnimationPlayer stores an Animation with key name.
如果动画播放器存储带有键名的动画，则返回true。

•bool is_playing ( ) const

Returns true if playing an animation.
如果播放动画，则返回true。

•void play ( String name="", float custom_blend=-1, float custom_speed=1.0, bool from_end=false )

Plays the animation with key name. Custom blend times and speed can be set. If custom_speed is negative and from_end is true, the animation will play backwards (which is equivalent to calling play_backwards).
播放带有键名的动画。 可以设置自定义混合时间和速度。 如果custom_speed为负，from_end为真，则动画将向后播放(相当于调用play_backwards)。

The AnimationPlayer keeps track of its current or last played animation with assigned_animation. If this method is called with that same animation name, or with no name parameter, the assigned animation will resume playing if it was paused, or restart if it was stopped (see stop for both pause and stop). If the animation was already playing, it will keep playing.
动画播放器跟踪其当前或最后播放的动画与assigned_animation。 如果使用相同的动画名称调用此方法，或者没有名称参数，则分配的动画将在暂停时恢复播放，或者在停止时重新启动（暂停和停止都请参见停止）。 如果动画已经在播放，它将继续播放。

Note: The animation will be updated the next time the AnimationPlayer is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call advance(0).
注：动画将在下一次处理动画播放器时更新。 如果其他变量同时更新，这被调用，它们可能更新得太早。 若要立即执行更新，请调用Advance（0）。

•void play_backwards ( String name="", float custom_blend=-1 )

Plays the animation with key name in reverse.
将键名反向播放动画。

This method is a shorthand for play with custom_speed = -1.0 and from_end = true, so see its description for more information.
此方法是玩=-1.0custom_speed的速记，from_end为真，请参阅其描述以获得更多信息。

•void queue ( String name )

Queues an animation for playback once the current one is done.
一旦当前动画完成，就会排队播放动画。

Note: If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.
注意：如果当前正在播放循环动画，则除非以某种方式停止循环动画，否则排队动画将永远不会播放。

•void remove_animation ( String name )

Removes the animation with key name.
移除带有键名的动画。

•void rename_animation ( String name, String newname )

Renames an existing animation with key name to newname.
将现有动画重命名为newname。

•void seek ( float seconds, bool update=false )

Seeks the animation to the seconds point in time (in seconds). If update is true, the animation updates too, otherwise it updates at process time. Events between the current frame and seconds are skipped.
查看动画到秒点的时间（以秒为单位）。 如果更新是正确的，动画也会更新，否则它会在处理时更新。 跳过当前帧和秒之间的事件。

•void set_blend_time ( String anim_from, String anim_to, float sec )

Specifies a blend time (in seconds) between two animations, referenced by their names.
指定两个动画之间的混合时间（以秒为单位），由它们的名称引用。

•void stop ( bool reset=true )

Stops or pauses the currently playing animation. If reset is true, the animation position is reset to 0 and the playback speed is reset to 1.0.
暂停或暂停当前播放的动画。 如果重置为真，则动画位置重置为0，播放速度重置为1.0。

If reset is false, the current_animation_position will be kept and calling play or play_backwards without arguments or with the same animation name as assigned_animation will resume the animation.
如果重置为false，则current_animation_position将被保留并调用Play或play_backwards，而不需要参数，或者使用与assigned_animation相同的动画名称恢复动画。








