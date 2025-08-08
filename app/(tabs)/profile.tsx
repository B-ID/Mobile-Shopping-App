import { useState } from "react";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import ScreenHeader from "@/components/screen-header";
import Button from "@/components/ui/button";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import { supabase } from "@/lib/supabase";

const ProfileScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
    } finally {
      setLoading(false);
    }
  };

  return (
    <NativeSafeAreaView>
      <Canvas>
        <ScreenHeader title={"Account Settings"} />

        <Container>
          <Button variant={'destructive'} size="lg" loading={loading} onPress={handleSignOut}>
            Sign Out
          </Button>
        </Container>
      </Canvas>
    </NativeSafeAreaView>
  );
};

export default ProfileScreen;
